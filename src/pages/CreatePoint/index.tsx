import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api'
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet'

import './styles.css'

import logo from '../../assets/logo.svg'

interface Item {
  item: number;
  title: string;
  image_url: string;
}

interface IBGEUFresponse {
  sigla: string;
}

interface IBGECityresponse {
  nome: string;
}

const CreatePoint = () => {

  const [itens, setItens] = useState<Item[]>([]);
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [initMap, setInitMap] = useState<[number, number]>([0, 0]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  })

  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');
  const [selectedItens, setSelectedItens] = useState<number[]>([]);
  const [selectedMap, setSelectedMap] = useState<[number, number]>([0, 0]);

  const history = useHistory();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      setInitMap([latitude, longitude]);
    })
  }, []);

  useEffect(() => {
    api.get('itens').then(response => {
      setItens(response.data)
    })
  }, []);

  useEffect(() => {
    axios.get<IBGEUFresponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios.get<IBGECityresponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
      const cityNames = response.data.map(city => city.nome);
      setCities(cityNames);
    });

  }, [selectedUf]);

  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;
    setSelectedUf(uf);
  }

  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;
    setSelectedCity(city);
  }

  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedMap([
      event.latlng.lat,
      event.latlng.lng,
    ])
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value })
  }

  function handleSelectedItem(id: number) {
    const alreadySelected = selectedItens.findIndex(item => item === id);

    if (alreadySelected >= 0) {
      const filteredItens = selectedItens.filter(item => item !== id);
      setSelectedItens(filteredItens);
    } else {
      setSelectedItens([...selectedItens, id]);
    }
  }

  async function handleSubmit(event: FormEvent) {

    event.preventDefault();

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedMap;
    const itens = selectedItens;
    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      itens,
    }
    
    await api.post('points', data);
    
    alert('Ponto de coleta criado!');

    history.push('/');
  }


  return (
    <div id="page-create-point">
      <header>
        <Link to="/">
          <img src={logo} alt="Ecoleta" />
        </Link>

      </header>

      <form onSubmit={handleSubmit}>
        <h1>Cadastro do <br /> ponto de coleta.</h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="">WhatsApp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereco</h2>
            <span>Selecione o endereco no mapa</span>
          </legend>

          <Map center={initMap} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedMap} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="0">Slecione uma UF</option>
                {ufs.map(uf => (
                  <option key={uf} value={uf}>{uf}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Slecione uma cidade</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

        </fieldset>

        <fieldset>
          <legend>
            <h2>Itens de coleta</h2>
            <span>Selecione um ou mais itens abaixo.</span>
          </legend>

          <ul className="items-grid">
            {itens.map(item => (
              <li key={item.item}
                onClick={() => handleSelectedItem(item.item)}
                className={selectedItens.includes(item.item) ? 'selected' : ''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}

          </ul>
        </fieldset>

        <button type="submit">
          Cadastrar ponto de coleta.
        </button>

      </form>

    </div>
  )
};

export default CreatePoint;