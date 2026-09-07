import { useState } from "react";
import logoImg from "@/imports/Amor_animal.jpg";
import photo1Img from "@/imports/Amor_animal_1.jpg";
import instagramImg from "@/imports/Screenshot_2026-09-07_at_12-47-23_Instagram.png";

const WA_LINK = "https://wa.me/5512991546778?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Amor%20Animal.";
const MAPS_LINK = "https://maps.google.com/?q=R.+Padre+Jucá,+828,+Jardim+América,+Jacareí,+SP";
const INSTAGRAM_LINK = "https://www.instagram.com/amoranimalhotelecreche";

function WhatsAppButton({ label = "Falar no WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#F5B800] text-[#0F1F5C] font-bold px-7 py-3.5 rounded-full text-base hover:bg-yellow-400 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      {label}
    </a>
  );
}

const services = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: "Hotel",
    desc: "Hospedagem segura e acolhedora para quando você precisar viajar ou se ausentar. Seu pet fica em um lar longe de casa, com atenção individual e rotina."
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: "Creche Diária",
    desc: "Para o dia a dia corrido. Seu cão passa o dia brincando, socializando e sendo cuidado — e você busca no final do expediente."
  }
];

const differentials = [
  {
    icon: "🎓",
    title: "Especialista em Comportamento Canino",
    desc: "A Ray tem formação em etologia e adestramento. Cada cão é entendido no seu comportamento, não apenas cuidado."
  },
  {
    icon: "🐾",
    title: "Adaptação no Tempo de Cada Um",
    desc: "Nenhum cão é igual. Respeitamos a chegada de cada animal sem forçar socialização — o ritmo é dele."
  },
  {
    icon: "📸",
    title: "Atualizações em Tempo Real",
    desc: "Você recebe fotos e vídeos do seu pet durante o dia. Tranquilidade garantida para quem ama."
  },
  {
    icon: "🏡",
    title: "Espaço Amplo, Limpo e Organizado",
    desc: "Ambiente pensado para o bem-estar dos animais: área de recreação, descanso e higienização constante."
  }
];

const testimonials = [
  {
    name: "Aniele Correia",
    text: "Muito muito boa. Ficamos muito tranquilos ao ver como nossa Karlotinha ficou bem e feliz. Recebemos fotos e vídeos da rotina dela diariamente... A Rayane é muito muito atenciosa com os pets. Com certeza se tornou o 2° lar da Karlota quando precisarmos. SUPER INDICO!",
    stars: 5
  },
  {
    name: "Beatriz Lunardi",
    text: "Espaço muito preparado para receber os cachorros, local limpo, grande e organizado. Também o preparo técnico da Ray que é adestradora e traz ainda mais confiança pra gente!",
    stars: 5
  },
  {
    name: "Eleni Lê Soares",
    text: "Simplesmente o melhor lugar para hospedar seu pet enquanto viaja ou trabalha. Espaço amplo, limpo e organizado. Profissionais mega capacitados, simpáticos, carismáticos e atenciosos em todos os aspectos. Meus 'filhos bichológicos' amaram e eu também.",
    stars: 5
  }
];

const faqs = [
  {
    q: "Meu cão pode ficar sem ter sido castrado?",
    a: "Sim! Aceitamos cães castrados e não castrados. O que é obrigatório é a vacinação em dia e ter pelo menos 4 meses de idade."
  },
  {
    q: "Como funciona a adaptação?",
    a: "Cada cão passa por um processo de adaptação gradual, respeitando o tempo dele. Não forçamos socialização. A Ray avalia o comportamento do animal e define o ritmo ideal."
  },
  {
    q: "Recebo atualizações do meu pet durante o dia?",
    a: "Sim! Você recebe fotos e vídeos pelo WhatsApp durante a estadia do seu cão — na creche diária e no hotel."
  },
  {
    q: "Quais vacinas são exigidas?",
    a: "V8 ou V10 (polivalente), antirrábica e Bordetella (tosse dos canis). A carteirinha de vacinação deve estar em dia. Em caso de dúvida, consulte seu veterinário ou entre em contato conosco."
  },
  {
    q: "Como faço para agendar?",
    a: "É simples! Basta clicar em qualquer botão de WhatsApp nesta página e mandar uma mensagem para a Ray. Ela vai tirar todas as suas dúvidas e confirmar a vaga."
  },
  {
    q: "Aceitam gatos ou outros animais?",
    a: "No momento atendemos somente cães. Caso isso mude, avisaremos pelo nosso Instagram @amoranimalhotelecreche."
  }
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-5 flex items-start justify-between gap-4 group"
      >
        <span className="font-semibold text-[#0F1F5C] group-hover:text-[#1847C8] transition-colors">{q}</span>
        <span className="text-[#1847C8] text-xl flex-shrink-0 mt-0.5">{open ? "−" : "+"}</span>
      </button>
      {open && (
        <p className="text-gray-600 pb-5 leading-relaxed -mt-1">{a}</p>
      )}
    </div>
  );
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white px-6 pt-6 pb-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#0F1F5C]" style={{ fontFamily: "'Fraunces', serif" }}>{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
        </div>
        <div className="px-6 py-5 text-gray-600 text-sm leading-relaxed space-y-4">{children}</div>
      </div>
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-[#F5B800] text-lg">★</span>
      ))}
    </div>
  );
}

export default function App() {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);
  return (
    <div className="min-h-full" style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <img src={logoImg} alt="Amor Animal Logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="font-bold text-[#1847C8] text-base hidden sm:block" style={{ fontFamily: "'Fraunces', serif" }}>
            Amor Animal Hotel e Creche Canino
          </span>
          <WhatsAppButton label="Falar agora" className="text-sm px-5 py-2.5" />
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-[#1847C8] text-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-[#F5B800] text-[#0F1F5C] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              Jacareí – SP
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5" style={{ fontFamily: "'Fraunces', serif" }}>
              Seu pet merece mais do que um lugar — merece um lar
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Creche diária e hotel para cães, com especialista em comportamento canino. Cuidado com técnica, carinho e respeito pelo tempo de cada animal.
            </p>
            <div className="flex flex-wrap gap-4">
              <WhatsAppButton label="Agendar uma visita" />
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src={photo1Img}
              alt="Ray com um cachorro no espaço de recreação da Amor Animal"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ aspectRatio: "4/3" }}
            />
            <div className="absolute -bottom-4 -left-4 bg-[#F5B800] text-[#0F1F5C] rounded-xl px-4 py-3 shadow-lg font-bold text-sm">
              ⭐ 5.0 no Google
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1847C8] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              O que oferecemos
            </h2>
            <p className="text-gray-600 text-lg">Soluções para cada momento da sua rotina</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-[#1847C8] mb-4 group-hover:scale-110 transition-transform inline-block">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0F1F5C] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <WhatsAppButton label="Perguntar sobre valores" />
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1847C8] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              Por que escolher a Amor Animal?
            </h2>
            <p className="text-gray-600 text-lg">Não é só cuidado — é uma abordagem diferente</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((d) => (
              <div key={d.title} className="text-center p-6 rounded-2xl hover:bg-blue-50 transition-colors">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="font-bold text-[#0F1F5C] mb-2 text-base" style={{ fontFamily: "'Fraunces', serif" }}>
                  {d.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE A RAY ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[#0F1F5C] text-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={instagramImg}
              alt="Ray, responsável pela Amor Animal, com um pastor alemão"
              className="rounded-2xl w-full object-cover shadow-2xl"
              style={{ aspectRatio: "3/4", objectPosition: "top" }}
            />
          </div>
          <div>
            <span className="text-[#F5B800] font-bold text-sm uppercase tracking-widest mb-3 block">
              Quem cuida do seu pet
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ fontFamily: "'Fraunces', serif" }}>
              Oi, eu sou a Ray
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg mb-5">
              Sou especialista em comportamento canino e apaixonada por cães há anos. Criei a Amor Animal porque acredito que cada cão merece ser entendido, não apenas tolerado.
            </p>
            <p className="text-blue-100 leading-relaxed mb-8">
              Na nossa creche e hotel, cada animal passa por uma adaptação no próprio ritmo, sem pressa e sem forçar. O resultado é um pet feliz — e um tutor tranquilo.
            </p>
            <WhatsAppButton label="Falar com a Ray" />
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1847C8] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              O que os tutores dizem
            </h2>
            <p className="text-gray-600 text-lg">Avaliações reais do Google</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm border border-yellow-100">
                <Stars count={t.stars} />
                <p className="text-gray-700 mt-4 mb-5 leading-relaxed text-sm">
                  "{t.text}"
                </p>
                <p className="font-bold text-[#0F1F5C] text-sm">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUISITOS ──────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-t border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#1847C8] mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
            Antes de agendar
          </h2>
          <p className="text-gray-600 mb-6">Para garantir a segurança de todos os pets, exigimos:</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-5 py-3">
              <span className="text-2xl">🗓️</span>
              <span className="font-semibold text-[#0F1F5C]">Cães a partir de 4 meses</span>
            </div>
            <div className="flex items-center gap-3 bg-blue-50 rounded-xl px-5 py-3">
              <span className="text-2xl">💉</span>
              <span className="font-semibold text-[#0F1F5C]">Vacinação em dia</span>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-5">Dúvidas? Fale com a Ray pelo WhatsApp — respondemos rapidinho!</p>
        </div>
      </section>

      {/* ── LOCALIZAÇÃO ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1847C8] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
            Onde ficamos
          </h2>
          <p className="text-gray-600 text-lg mb-8">Jacareí – SP, fácil de chegar</p>
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1847C8] text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors mb-6"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Ver no Google Maps
          </a>
          <p className="text-gray-500 text-sm">R. Padre Jucá, 828 – Jardim América, Jacareí – SP</p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1847C8] mb-3" style={{ fontFamily: "'Fraunces', serif" }}>
              Perguntas frequentes
            </h2>
            <p className="text-gray-600 text-lg">Tudo o que você precisa saber antes de agendar</p>
          </div>
          <div className="bg-gray-50 rounded-2xl px-6 divide-y divide-gray-100">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Ainda tem dúvida?{" "}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#1847C8] font-semibold hover:underline">
              Pergunte no WhatsApp →
            </a>
          </p>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────────────── */}
      <section className="py-20 bg-[#1847C8] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Fraunces', serif" }}>
            Pronta para deixar seu pet em boas mãos?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Fale com a Ray agora pelo WhatsApp e agende uma visita — sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppButton label="Falar no WhatsApp agora" className="text-lg px-8 py-4" />
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors text-lg"
            >
              @amoranimalhotelecreche
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-[#0F1F5C] text-blue-200 py-10 text-center text-sm">
        <img src={logoImg} alt="Logo Amor Animal" className="h-10 w-10 rounded-full mx-auto mb-3 object-cover" />
        <p className="font-semibold text-white">Amor Animal Hotel e Creche Canino</p>
        <p className="mt-1">R. Padre Jucá, 828 – Jardim América, Jacareí – SP</p>
        <p className="mt-1">(12) 99154-6778</p>
        <div className="flex justify-center gap-6 mt-4 text-blue-300">
          <button onClick={() => setModal("privacy")} className="hover:text-white underline underline-offset-2 transition-colors">
            Política de Privacidade
          </button>
          <button onClick={() => setModal("terms")} className="hover:text-white underline underline-offset-2 transition-colors">
            Termos de Uso
          </button>
        </div>
        <p className="mt-5 text-blue-400 text-xs">© {new Date().getFullYear()} Amor Animal Hotel e Creche Canino. Todos os direitos reservados.</p>
      </footer>

      {/* ── MODAIS ──────────────────────────────────────────────────── */}
      {modal === "privacy" && (
        <Modal title="Política de Privacidade" onClose={() => setModal(null)}>
          <p><strong>Última atualização:</strong> setembro de 2026</p>
          <p>A Amor Animal Hotel e Creche Canino respeita a privacidade dos seus clientes e está comprometida com a proteção dos dados pessoais coletados durante o uso deste site e dos nossos serviços.</p>
          <p><strong>Quais dados coletamos?</strong><br />Nome, telefone (WhatsApp) e informações sobre o seu pet, fornecidos voluntariamente para agendamento e contato.</p>
          <p><strong>Para que usamos seus dados?</strong><br />Exclusivamente para confirmar agendamentos, enviar atualizações sobre o seu pet e responder dúvidas via WhatsApp. Não vendemos, compartilhamos ou cedemos seus dados a terceiros.</p>
          <p><strong>Por quanto tempo guardamos?</strong><br />Seus dados são mantidos enquanto houver relação ativa e pelo período mínimo exigido por lei.</p>
          <p><strong>Seus direitos (LGPD – Lei nº 13.709/2018):</strong><br />Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento pelo WhatsApp (12) 99154-6778.</p>
          <p><strong>Cookies:</strong><br />Este site não utiliza cookies de rastreamento ou publicidade.</p>
          <p>Em caso de dúvidas, entre em contato com a Ray pelo WhatsApp.</p>
        </Modal>
      )}
      {modal === "terms" && (
        <Modal title="Termos de Uso" onClose={() => setModal(null)}>
          <p><strong>Última atualização:</strong> setembro de 2026</p>
          <p>Ao utilizar este site e os serviços da Amor Animal Hotel e Creche Canino, você concorda com os termos abaixo.</p>
          <p><strong>Sobre os serviços:</strong><br />Oferecemos creche diária e hospedagem (hotel) para cães a partir de 4 meses, devidamente vacinados. O agendamento é realizado exclusivamente via WhatsApp.</p>
          <p><strong>Requisitos obrigatórios:</strong><br />Cães devem ter no mínimo 4 meses de idade e estar com a carteirinha de vacinação em dia (V8 ou V10, antirrábica e Bordetella). O não cumprimento dessas exigências pode resultar na recusa do serviço.</p>
          <p><strong>Responsabilidades do tutor:</strong><br />O tutor é responsável por informar condições de saúde, comportamento e medicações em uso do animal. A omissão de informações relevantes isenta a Amor Animal de responsabilidade por intercorrências.</p>
          <p><strong>Fotos e vídeos:</strong><br />As mídias enviadas são de uso exclusivo do tutor. A Amor Animal pode utilizar imagens dos pets (sem identificação pessoal do tutor) para fins de comunicação nas redes sociais, salvo solicitação de não divulgação.</p>
          <p><strong>Cancelamentos:</strong><br />Cancelamentos devem ser informados com pelo menos 24 horas de antecedência pelo WhatsApp. Casos de força maior serão avaliados individualmente.</p>
          <p>Para qualquer questão, entre em contato pelo WhatsApp (12) 99154-6778.</p>
        </Modal>
      )}

    </div>
  );
}
