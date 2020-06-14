# Keapê - Projeto Hackathon ccr 2020

<p>É a plataforma da CCR que permite interações via WhatsApp com usuario caminhoneiro.</p>
<p>Este sistema tem interface amigável e usa uma abordagem leve e divertida.</p>

## Para iniciar o projeto use os comandos ->

`npm install`\
`npm start`

<h3>O que é o Amazon Polly?</h3>

O Amazon Polly é um serviço de nuvem que converte texto em fala realista. Você pode usar o Amazon Polly para desenvolver aplicativos que aumentam o envolvimento e a acessibilidade. O Amazon Polly suporta vários idiomas e inclui uma variedade de vozes realistas, para que você possa criar aplicativos habilitados para fala que funcionam em vários locais e usam a voz ideal para seus clientes. Com o Amazon Polly, você paga apenas pelo texto que sintetiza. Você também pode armazenar em cache e reproduzir a fala gerada do Amazon Polly sem nenhum custo adicional.

Além disso, o Amazon Polly inclui várias vozes de texto para fala neural (NTTS), oferecendo melhorias inovadoras na qualidade da fala por meio de uma nova abordagem de aprendizado de máquina, oferecendo assim aos clientes o texto para voz mais natural e humano vozes possíveis. A tecnologia Neural TTS também suporta um estilo de fala do apresentador de notícias que é adaptado aos casos de uso de narração de notícias.

Os casos de uso comuns do Amazon Polly incluem, entre outros, aplicativos móveis, como leitores de notícias, jogos, plataformas de eLearning, aplicativos de acessibilidade para pessoas com deficiência visual e o crescente segmento da Internet das Coisas (IoT).

O Amazon Polly é certificado para uso com cargas de trabalho regulamentadas para HIPAA (Lei de Portabilidade e Responsabilidade do Seguro de Saúde de 1996) e Padrão de Segurança de Dados da Indústria de Cartões de Pagamento (PCI DSS).

Alguns dos benefícios do uso do Amazon Polly incluem:

Alta qualidade - O Amazon Polly oferece a nova tecnologia TTS neural e a melhor tecnologia padrão da classe para sintetizar a fala natural superior com alta precisão de pronúncia (incluindo abreviações, expansões de acrônimos, interpretações de data / hora e desambiguação do homógrafo).

 

Baixa latência - O Amazon Polly garante respostas rápidas, o que a torna uma opção viável para casos de uso de baixa latência, como sistemas de diálogo.

 

Suporte para um grande portfólio de idiomas e vozes - o Amazon Polly suporta dezenas de idiomas, oferecendo opções de voz masculina e feminina para a maioria dos idiomas. Atualmente, o Neural TTS suporta três vozes em inglês britânico e oito vozes em inglês dos EUA. Esse número continuará aumentando à medida que colocarmos mais vozes neurais online. As vozes em inglês dos EUA Matthew e Joanna também podem usar o estilo de fala do Neural Newscaster, semelhante ao que você pode ouvir de uma âncora de notícias profissional.

 

Econômico - O modelo de pagamento por uso do Amazon Polly significa que não há custos de configuração. Você pode começar pequeno e aumentar à medida que o aplicativo cresce.

 

Solução baseada em nuvem- As soluções TTS no dispositivo requerem recursos computacionais significativos, principalmente energia da CPU, RAM e espaço em disco. Isso pode resultar em custos de desenvolvimento mais altos e maior consumo de energia em dispositivos como tablets, smartphones, etc. Por outro lado, a conversão de TTS feita na nuvem da AWS reduz drasticamente os requisitos de recursos locais. Isso permite o suporte de todos os idiomas e vozes disponíveis com a melhor qualidade possível. Além disso,

<h3> As chamadas de API autenticadas devem ser assinadas usando o Processo de assinatura da versão 4 da assinatura. Para obter mais informações, consulte Assinando solicitações de API da AWS na Referência geral do Amazon Web Services .</h3>

<h4>Documentação de Referencia</h4><br>
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
   <channel>
      <title>Document History for Amazon Polly</title>
      <link>https://docs.aws.amazon.com/polly/latest/dg/</link>
      <description/>
      <lastBuildDate>Fri, 12 Jun 2020 7:32:16 Z</lastBuildDate>
      <item>
         <title>New Voice Available for Newscaster Style</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>In addition to the Matthew and Joanna voices for the Newscaster speaking style, Amazon Polly now provides an additional option for this speaking style.
                    Using the neural engine, you can use the Lupe voice in Spanish (American) for the Newscaster style. For more information, see &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/ntts-speakingstyles.html"&gt;NTTS Speaking Styles&lt;/a&gt;.</description>
         <pubDate>Thu, 16 Apr 2020 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Voice_Available_for_Newscaster_Style_2020-04-16</guid>
      </item>
      <item>
         <title>New Feature</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>In addition to the Newscaster speaking style, Amazon Polly now provides a second NTTS speaking style to help you synthesize even better text to speech 
                    passages. The Conversational style uses the neural system to generate speech in a more friendly and expressive conversational style that can be 
                    used in many use cases. For more information, see &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/ntts-speakingstyles.html"&gt;NTTS Speaking Styles&lt;/a&gt;.</description>
         <pubDate>Mon, 25 Nov 2019 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Feature_2019-11-25</guid>
      </item>
      <item>
         <title>New Voices Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Two new voices added:  Camila (female, Portuguese-Brazil) and Lupe (female, Spanish-US).</description>
         <pubDate>Wed, 23 Oct 2019 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Voices_Added_2019-10-23</guid>
      </item>
      <item>
         <title>New Feature Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Addition of &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/sapi-plugin.html"&gt;Amazon Polly for Windows plugin&lt;/a&gt; to incorporate the 
                    full range of Amazon Polly voices into Windows SAPI-compliant applications.</description>
         <pubDate>Thu, 26 Sep 2019 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Feature_Added_2019-09-26</guid>
      </item>
      <item>
         <title>Major New Feature</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>In addition to the standard text-to-speech (TTS) voices supported by Amazon Polly since its launch, Amazon Polly now 
                    provides an improved Neural TTS (NTTS) system that can provide even higher quality voices, thereby providing you with the 
                    most natural and human-like text-to-speech voices possible. For more information, see &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/NTTS-main.html"&gt;Neural Text-to-Speech&lt;/a&gt;.</description>
         <pubDate>Tue, 30 Jul 2019 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#Major_New_Feature_2019-07-30</guid>
      </item>
      <item>
         <title>New Voices Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>New voices added:  Lucia (female, Spanish), and Bianca (female, Italian).</description>
         <pubDate>Thu, 2 Aug 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Voices_Added_2018-08-02</guid>
      </item>
      <item>
         <title>New Language Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>New language added:  Mexican Spanish (es-MX). This language uses the female voice of Mia.</description>
         <pubDate>Thu, 2 Aug 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Language_Added_2018-08-02</guid>
      </item>
      <item>
         <title>New Language Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>New language added:  Hindi (hi-IN). This voice uses the female voice of Aditi, which is also used for Indian English,
                    making Aditi Amazon Polly's first bilingual voice.</description>
         <pubDate>Thu, 2 Aug 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Language_Added_2018-08-02</guid>
      </item>
      <item>
         <title>New SSML Feature Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Addition of &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/supported-ssml.html#maxduration-tag"&gt;Maximum Duration for Synthesized Speech&lt;/a&gt;.</description>
         <pubDate>Tue, 17 Jul 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_SSML_Feature_Added_2018-07-17</guid>
      </item>
      <item>
         <title>New Feature Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Addition of &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/asynchronous.html"&gt;Speech synthesis of long text passages&lt;/a&gt; (up to 100,000 billed characters).</description>
         <pubDate>Tue, 17 Jul 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Feature_Added_2018-07-17</guid>
      </item>
      <item>
         <title>New Voice Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>New voice added:  LÃ©a (female, French).</description>
         <pubDate>Tue, 5 Jun 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Voice_Added_2018-06-05</guid>
      </item>
      <item>
         <title>Region Expansion</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Expansion of Amazon Polly service to all commercial regions.</description>
         <pubDate>Mon, 4 Jun 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#Region_Expansion_2018-06-04</guid>
      </item>
      <item>
         <title>New Language Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>New language added: Korean (ko-KR).</description>
         <pubDate>Mon, 4 Jun 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Language_Added_2018-06-04</guid>
      </item>
      <item>
         <title>Expanded Feature</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Expansion of Amazon Polly WordPress Plugin feature, including addition of Amazon Translate capabilities.</description>
         <pubDate>Mon, 4 Jun 2018 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#Expanded_Feature_2018-06-04</guid>
      </item>
      <item>
         <title>New Voices Added</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Two new voices added:  Aditi (female, Indian English) and Seoyeon (female, Korean).</description>
         <pubDate>Wed, 15 Nov 2017 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Voices_Added_2017-11-15</guid>
      </item>
      <item>
         <title>New Feature</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>Addition of new &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/speechmarks.html"&gt;Speech Marks&lt;/a&gt; feature, as well 
                    as an expansion of &lt;a href="https://docs.aws.amazon.com/polly/latest/dg/ssml.html"&gt;SSML&lt;/a&gt; capabilities..</description>
         <pubDate>Wed, 19 Apr 2017 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Feature_2017-04-19</guid>
      </item>
      <item>
         <title>New Guide</title>
         <link>https://docs.aws.amazon.com/polly/latest/dg/doc-history.html</link>
         <description>This is the first release of the Amazon Polly Developer Guide.</description>
         <pubDate>Wed, 30 Nov 2016 19:00:00 GMT</pubDate>
         <guid isPermaLink="false">https://docs.aws.amazon.com/polly/latest/dg/#New_Guide_2016-11-30</guid>
      </item>
   </channel>
</rss>
