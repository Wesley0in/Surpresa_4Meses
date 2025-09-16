import HeroSection from "@/components/HeroSection";
import TimelineCard from "@/components/TimelineCard";
import CountdownSection from "@/components/CountdownSection";
import FinalMessage from "@/components/FinalMessage";
import coupleSunset from "@/assets/couple-sunset.jpg";
import quinta_img from "@/assets/quinta.jpeg";
import sexta_img from "@/assets/sexta.jpeg";
import sabado_img from "@/assets/sabado.jpeg";
import domingo_img from "@/assets/domingo.jpeg";
import segunda_img from "@/assets/segunda.jpeg";
import terca_img from "@/assets/terca.jpeg";
import quarta_img from "@/assets/quarta.jpeg";
import heartBokeh from "@/assets/heart-bokeh.jpg";

const Index = () => {
  // Dados de exemplo - você pode editar facilmente
  const timelineData = [
    {
      day: "1",
      date: "Quinta-feira",
      title: "O Primeiro Dia",
      content: "Acordei e a primeira coisa que veio na minha cabeça foi você. Dormi no sofá porque a Lulu não me deixou dormir, miou a noite toda. Fiquei com o coração quentinho quando soube que você já estava com a Ana Laura. Três horas depois percebi como minha rotina havia mudado, tudo girava em torno do seu sorriso pela manhã rsrs, e naquele dia eu nem quis levantar da cama porque não sabia se dava conta. No trabalho vi você animada com seus amigos, sempre me contando tudo bem empolgada, até mandou um áudio dizendo que a palestra tinha sido um sucesso e que suas amigas viram um pedacinho do final. Fiquei muito feliz por você. Aquele mesmo dia você foi curtir com eles e eu não parava de pensar no quanto eu queria estar presente, mas sabia que vc precisava desse momento e que estava tudo bem. Aprendi que o silêncio as vezes pode ser muito barulhento quando você não está aqui pra preencher com sua risada hahaha.",
      image: quinta_img
    },
    {
      day: "2",
      date: "Sexta-feira",
      title: "Já parecia 1 mês sem você",
      content: "Acordei cedo e fui trabalhar na Cria. Logo percebi que você ainda estava tentando entender tudo o que sentia, me contou que parecia carregar vários sentimentos ao mesmo tempo. Naquela manhã, me mandou mensagem dizendo que tinha recebido o retorno do Coco Bambu e que não havia passado. Eu sei do seu potencial, sei que pode conquistar uma vaga em uma big tech se quiser, mas também sabia o quanto aquele emprego era importante para você, e confesso que não soube como te confortar. Depois disso, você não me respondeu mais. Fiquei preocupado, sem saber como você estava. Quando me disse que estava com uma tristeza aguda, meu coração apertou ainda mais. Pensei até que pudesse ter acontecido alguma coisa com “aquela pessoa que você já sabe quem é” rsrs. Descobri que tinha sido uma crise de ansiedade, e enquanto isso eu estava aqui, trabalhando, mas aflito. No fundo, tudo que eu queria era estar ao seu lado, te encher de beijinhos e dizer a famosa frase: “não se preocupe, deixa que eu resolvo, seja apenas minha nenenguinha linda”. Mais tarde, vi que você tinha se arrumado e até postado uma foto. Gostei do look, sabia que estava melhor e que ia se divertir com seus amigos. Isso me deixou tranquilo, porque eu sabia que você estava ciente que tinha alguém aqui que te ama muito e que ia estar sempre esperando por você. Aquele dia fui dormir mais cedo, respeitei o espaço que você pediu e confiei que, apesar de tudo, você ia ficar bem.",
      image: sexta_img,
      reverse: true
    },
    {
      day: "3",
      date: "Sábado", 
      title: "Descobertas do Coração",
      content: "Fui pra academia bem cedo no sábado e, enquanto treinava, não conseguia tirar da cabeça o que tinha acontecido com você na sexta. Logo depois você me respondeu, contou que estava muito ansiosa, que passou o dia inteira sozinha, que o Izi tinha te chamado pra ir no lounge ver ele tocar e você acabou não indo porque a ansiedade bateu e sabia que, se fosse, ia acabar bebendo. Fiquei tranquilo naquele dia porque sabia que você estava se recuperando e quis me atualizar pra me deixar calmo também, e conseguiu. Entendi você tão profundamente naquele momento; falei que não queria que você se culpasse por não me contar tudo, porque eu sei que, quando estiver pronta, você vai me contar. Quis só te acalmar, dizer que tava tudo bem, que eu não estava chateado e que eu também estava me cuidando. Tem horas em que, com tristeza aguda e ansiedade, não existe frase mágica que resolva, e tá tudo bem. Às vezes não tem conversa, tem que sentir. Eu sei disso, não havia muito o que eu pudesse falar pra te fazer melhorar, só te acolher. Saí com os meninos depois e não parei de pensar em você, você me ligou dizendo que estava chorando e que tinha um rapaz te seguindo, fiquei me perguntando do pq estava chorando, veio na minha cabeça que você estava sendo maltratada por alguem que mostrava estar perto. Quando você me ligou à noite, fiquei muito feliz, você não tem ideia do quanto. Te ouvir me deixou mais calmo, mais inteiro. Em vez de ficar triste, decidi fazer algo especial: comecei a preparar essa surpresa pra você. Cada linha de código que escrevo é um “eu te amo” em forma digital. Amar você me deixou mais criativo, mais dedicado, você desperta o melhor em mim, mesmo quando está longe.",
      image: sabado_img
    },
    {
      day: "4",
      date: "Domingo",
      title: "Reflexões de Amor",
      content: "Domingo acordei cheio de pensamentos, aqueles clássicos pensamentos de domingo rsrs. Já é um dia meio melancólico por natureza, e sem você aqui ficou ainda mais vazio. Fiquei imaginando como seria se estivéssemos juntos: ir ao Eixão, ver o pôr do sol no Parque da Cidade, correr, treinar, assistir a um filme… mas acabei tendo que me contentar em aproveitar a minha solidão. Você me contou que tinha brigado com uma certa pessoa no dia anterior, e logo lembrei do momento no dia anterior em que estava chorando e me ligou porque um rapaz estava te seguindo. Fiquei tentando entender o que tinha acontecido, cheio de dúvidas, mas também cheio de saudades. Passei o dia com a nossa Lulu, que foi a minha parceira de domingo. Enquanto isso, você ia me contando que estava aprendendo a fazer mate, que o Almir ia te ensinar direitinho, e ao final do dia me disse que tinha passado a tarde na Farroupilha com ele e a Fernanda. Enquanto você vivia seu domingo, eu só pensava em como entregar essa surpresa. Se seria no dia da sua chegada ou no nosso aniversário de quatro meses. No fim, achei justo ser hoje dia 16 de Setembro, pra que você voltasse pra casa lendo como me senti nesses dias e refletindo no quanto eu amo você, garota! Estamos completando 4 meses, mal posso esperar pra ver nossas crianças correndo pela nossa casa, você como minha esposa toda linda e vários planos de viagens e objetivos para a vida. Pensei em como você mudou minha vida nestes 4 meses. Antes era só eu, agora somos nós. Você me ensinou que amar não é só sentir borboletas no estômago, é também querer ser uma pessoa melhor todos os dias. É escolher dividir os sonhos e multiplicar as alegrias. Te amo não só pelo que você é, mas por quem eu me torno quando estou com você.",
      image: domingo_img,
      reverse: true
    },
    {
      day: "5",
      date: "Segunda-feira",
      title: "Planos e Sonhos",
      content: "Segunda-feira chegou e eu já estava fazendo planos pra quando você voltar. Não vejo a hora de te abraçar e não soltar mais, de ouvir cada detalhe da sua viagem, os erros, os aprendizados, as histórias engraçadas e tudo que você viveu. Quero ver você enchendo a Lulu de beijos, saindo pra treinar comigo, dividindo momentos que parecem pequenos mas que pra mim são tudo. Fiquei pensando em tantos lugares que quero te levar, tantas conversas que ainda quero ter, tantos abraços que preciso te dar. Hoje (segunda feira) você me disse que não queria mais voltar aí, que estava chateada com algumas coisas e até falou pros seus amigos que não volta mais pra Santa Maria. Eu te entendo. Tinha vontade de conhecer o lugar onde o amor da minha vida viveu uma fase tão importante, mas se não faz mais sentido pra você, também não faz pra mim. No nosso próximo date vamos decidir a nossa próxima viagem do Rio Grande do Sul rsrs. Cada plano que eu faço tem você no centro, porque meu futuro só tem graça se for ao seu lado.",
      image: segunda_img
    },
    {
      day: "6",
      date: "Terça-feira",
      title: "Quase Lá",
      content: "Penúltimo dia! Meu coração já está acelerando só de pensar que amanhã você volta. Organizei tudo para te receber, a luluzinha parece que ta sentindo que vc ta voltando pois está molenga de saudades, casinha ta arrumadinha pronta pra te receber, meu coração cada vez mais apaixonado, e meus braços prontos para não te soltar por um bom tempo. A ansiedade boa de quem ama e sabe que vai reencontrar seu mundo. Hoje você foi tirar as fotos da Ashley e do Almir, e quando estiver lendo isso já deve ter vivido esse momento. Espero que tenha se divertido muito e aproveitado cada segundo. Já pensei no seu presente de aniversário e tenho quase certeza de que você vai amar. Agora só quero que curta o finalzinho do seu dia com leveza. Vou te acompanhar na viagem de volta, do mesmo jeitinho que fiz na ida. Te amo demais meu amor e já estou contando as horas pra te ver. Só mais um dia e finalmente você vai estar aqui comigo de novo.",
      image: terca_img,
      reverse: true
    },
    {
      day: "7",
      date: "Quarta-feira - Amanhã",
      title: "O Reencontro!",
      content: "A mensagem de quarta feira vou ler amanhã para você. Mas queria que soubesse que cada palavra aqui foi escrita com muito amor e saudade. Mal posso esperar pra te ver, te abraçar, te beijar e te encher de carinho. Você é a melhor coisa que já me aconteceu, e esses dias sem você só reforçaram o quanto eu te amo. Que essa surpresa seja apenas o começo de muitas outras que ainda vamos viver juntos. Te amo mais do que palavras podem expressar, e estou contando os minutos pra te ter de volta em meus braços. Até amanhã, meu amor.",
      image: quarta_img
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      <CountdownSection />
      
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Diário dos Meus Dias
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada dia foi único, cada sentimento foi especial. 
              Esta é a história de como meu amor por você cresceu ainda mais.
            </p>
          </div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <TimelineCard
                key={index}
                day={item.day}
                date={item.date}
                title={item.title}
                content={item.content}
                image={item.image}
                reverse={item.reverse}
              />
            ))}
          </div>
        </div>
      </section>
      
      <FinalMessage />
    </div>
  );
};

export default Index;