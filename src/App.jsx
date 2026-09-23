import { useEffect, useState } from "react";
import logoNarguileAju from "./assets/logo-narguileaju.jpeg";
import loungeVideo from "./assets/hookah.mp4";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { supabase } from "./lib/supabase";

const WHATSAPP_LINK =
  "https://wa.me/557991717219?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20NarguileAju.";

const INSTAGRAM_LINK = "https://www.instagram.com/narguileaju/";

const YOUTUBE_LINK = "https://www.youtube.com/c/TalkAboutHookahBrazil/about";

const JUKEBOX_LINK = "https://denisantos83.github.io/hookah/#/";

const MAPS_LINK =
  "https://www.google.com/maps/place/NarguileAju+Hookah+Lounge+%26+Store+-+R.+Vila+Cristina,+617+-+S%C3%A3o+Jos%C3%A9,+Aracaju+-+SE,+49015-380/data=!4m2!3m1!1s0x71ab333b310c7f1:0xfd4d21cd5b32f9d6?utm_source=mstt_1&entry=gps";

function LoungePresenceCard() {
  const [quantidade, setQuantidade] = useState(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function atualizarPresenca() {
      const { data, error } = await supabase.rpc("quantidade_pessoas_lounge");

      if (!ativo) return;

      if (error) {
        console.error("Não foi possível consultar o lounge:", error);
        setErro(true);
        return;
      }

      setQuantidade(Number(data) || 0);
      setErro(false);
    }

    atualizarPresenca();
    const intervalo = window.setInterval(atualizarPresenca, 60000);

    return () => {
      ativo = false;
      window.clearInterval(intervalo);
    };
  }, []);

  // Se houver alguma instabilidade, o card não exibe informação incorreta.
  if (erro) return null;

  const texto =
    quantidade === null
      ? "Atualizando presença..."
      : quantidade === 1
        ? "1 pessoa no lounge"
        : `${quantidade} pessoas no lounge`;

  return (
    <a
      className="lounge-presence"
      href={JUKEBOX_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir Jukebox NarguileAju"
    >
      <span className="lounge-presence-dot" aria-hidden="true" />

      <span>
        <small>LOUNGE AGORA</small>
        <strong aria-live="polite">{texto}</strong>
      </span>

      <b aria-hidden="true">›</b>
    </a>
  );
}

function App() {
  return (
    <div className="site">
      {/* =========================
          NAVBAR
      ========================== */}

      <header className="navbar">
        <a className="brand" href="#inicio">
          <div className="brand-symbol">🐪</div>

          <div>
            <strong>NarguileAju</strong>
            <span>Hookah Lounge & Store</span>
          </div>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#lounge">Lounge</a>
          <a href="#jukebox">Jukebox</a>
          <a href="#loja">Loja</a>
          <a href="#localizacao">Localização</a>
        </nav>

        <a
          className="button button-small"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main>
        {/* =========================
            HERO
        ========================== */}

        <section className="hero" id="inicio">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />

          <div className="hero-content">
            <div className="hero-tag">
              <span>🔥</span>
              Hookah Lounge em Aracaju
            </div>

            <h1>
              Muito mais que <span>narguile.</span>
              <br />
              Uma experiência.
            </h1>

            <p className="hero-description">
              Lounge e loja mais que especializada em narguiles do Nordeste.
              Música, experiência, cultura hookah e uma atmosfera feita para
              curtir a noite.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                💬 Falar no WhatsApp
              </a>

              <a className="button button-outline" href="#jukebox">
                🎵 Conhecer o Jukebox
              </a>
            </div>

            <div className="hero-info">
              <div>
                <span className="hero-info-icon">📍</span>

                <div>
                  <strong>Aracaju - SE</strong>
                  <span>Rua Vila Cristina, 617</span>
                </div>
              </div>

              <div>
                <span className="hero-info-icon">🎧</span>

                <div>
                  <strong>Som + experiência</strong>
                  <span>Escolha sua música</span>
                </div>
              </div>

              <div>
                <span className="hero-info-icon">🐪</span>

                <div>
                  <strong>NarguileAju</strong>
                  <span>Hookah Culture</span>
                </div>
              </div>
            </div>
          </div>

          {/* LOGO VISUAL DO CAMELO */}

          <div className="hero-art">
            <div className="hero-circle">
              <div className="hero-circle-inner">
                <div className="camel">🐪</div>

                <span>NarguileAju</span>

                <small>Hookah Lounge</small>
              </div>
            </div>

            <div className="smoke smoke-one" />
            <div className="smoke smoke-two" />
            <div className="smoke smoke-three" />
          </div>
        </section>

        {/* =========================
    LOUNGE
========================== */}

        <section className="section lounge-section" id="lounge">
          <div className="section-heading lounge-heading">
            <span className="eyebrow">NOSSO ESPAÇO</span>

            <h2>O lounge onde a noite acontece.</h2>

            <p>
              Um ambiente criado para quem gosta de boa música, bons momentos e
              uma experiência completa em cultura hookah.
            </p>
          </div>

          <div className="lounge-showcase">
            {/* CARDS */}

            <div className="lounge-features">
              <article className="lounge-mini-card">
                <span className="feature-icon">🔥</span>

                <div>
                  <h3>Experiência Hookah</h3>

                  <p>
                    Um ambiente pensado para quem realmente aprecia narguile e
                    quer aproveitar cada sessão.
                  </p>
                </div>
              </article>

              <article className="lounge-mini-card">
                <span className="feature-icon">🎶</span>

                <div>
                  <h3>Música do seu jeito</h3>

                  <p>
                    Entre no nosso Jukebox pelo celular e participe da trilha
                    sonora da casa.
                  </p>
                </div>
              </article>

              <article className="lounge-mini-card">
                <span className="feature-icon">📸</span>

                <div>
                  <h3>Viva e compartilhe</h3>

                  <p>
                    Curta a noite, registre seus momentos e acompanhe a
                    NarguileAju nas redes sociais.
                  </p>
                </div>
              </article>
            </div>

            {/* INSTAGRAM */}

            <div className="lounge-instagram">
              <div className="instagram-header">
                <div>
                  <span className="instagram-label">NO NARGUILEAJU</span>
                  <strong>Veja como é a experiência.</strong>
                </div>

                <a
                  href="https://www.instagram.com/reel/DYBXuG_oV8S/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Reel no Instagram"
                >
                  <FaInstagram />
                </a>
              </div>

              <div className="instagram-video">
                <video
                  src={loungeVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  aria-label="Vídeo da experiência no NarguileAju"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            JUKEBOX
        ========================== */}

        <section className="jukebox-section" id="jukebox">
          <div className="jukebox-card">
            <div className="jukebox-content">
              <span className="eyebrow">NARGUILEAJU JUKEBOX</span>

              <h2>
                A trilha sonora
                <br />
                também é sua.
              </h2>

              <p>
                Acesse pelo celular, escolha suas músicas e participe da fila da
                casa. Tudo direto pelo navegador.
              </p>

              <a
                className="button button-primary"
                href={JUKEBOX_LINK}
                target="_blank"
                rel="noreferrer"
              >
                🎵 Entrar no Jukebox
              </a>
            </div>

            <div className="jukebox-phone">
              <div className="phone">
                <div className="phone-camera" />

                <div className="phone-screen">
                  <span className="phone-logo">🐪</span>

                  <strong>NarguileAju</strong>

                  <small>JUKEBOX</small>

                  <div className="phone-song">
                    <span>♫</span>

                    <div>
                      <strong>Sua música</strong>
                      <small>pode ser a próxima</small>
                    </div>
                  </div>

                  <div className="phone-button">ESCOLHER MÚSICA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            REDES SOCIAIS
        ========================== */}

        <section className="section social-section">
          <div className="section-heading">
            <span className="eyebrow">CONECTE-SE</span>

            <h2>NarguileAju também está online.</h2>
          </div>

          <div className="social-grid">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span className="social-icon instagram" aria-hidden="true">
                <FaInstagram />
              </span>

              <div>
                <strong>Instagram</strong>
                <small>@narguileaju</small>
              </div>

              <b>→</b>
            </a>

            <a
              href={YOUTUBE_LINK}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span className="social-icon youtube" aria-hidden="true">
                <FaYoutube />
              </span>

              <div>
                <strong>YouTube</strong>
                <small>Talk About Hookah Brazil</small>
              </div>

              <b>→</b>
            </a>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="social-card"
            >
              <span className="social-icon whatsapp" aria-hidden="true">
                <FaWhatsapp />
              </span>

              <div>
                <strong>WhatsApp</strong>
                <small>Fale diretamente com a gente</small>
              </div>

              <b>→</b>
            </a>
          </div>
        </section>

        {/* =========================
            NARGUILEAJU STORE
        ========================== */}

        <section className="store-section" id="loja">
          <div className="store-overlay">
            {/* ESQUERDA */}

            <div className="store-content">
              <span className="eyebrow">NARGUILEAJU STORE</span>

              <h2>Loja online em construção.</h2>

              <p>
                Em breve você poderá conhecer produtos, acessórios e novidades
                da NarguileAju diretamente pelo site.
              </p>

              <div className="construction-badge">🚧 Em construção</div>
            </div>

            {/* DIREITA */}

            <div className="store-brand-area">
              <img
                src={logoNarguileAju}
                alt="NarguileAju"
                className="store-logo"
              />

              <a
                className="button button-outline-light"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Consultar produtos pelo WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* =========================
            LOCALIZAÇÃO
        ========================== */}

        <section className="section location-section" id="localizacao">
          <div className="location-content">
            <span className="eyebrow">ONDE ESTAMOS</span>

            <h2>
              Seu próximo rolê tem
              <br />
              endereço.
            </h2>

            <p className="address">
              📍 Rua Vila Cristina, 617
              <br />
              São José, Aracaju - SE
              <br />
              CEP 49015-380
            </p>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              📍 Abrir no Google Maps
            </a>
          </div>

          {/* GOOGLE MAPS INCORPORADO */}

          <div className="google-map">
            <iframe
              title="Localização NarguileAju Hookah Lounge"
              src="https://www.google.com/maps?q=Rua+Vila+Cristina,+617,+Sao+Jose,+Aracaju,+SE,+49015-380&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      {/* =========================
          FOOTER
      ========================== */}

      <footer>
        <div className="footer-brand">
          <div className="brand-symbol">🐪</div>

          <div>
            <strong>NarguileAju</strong>
            <span>Hookah Lounge & Store</span>
          </div>
        </div>

        <p>
          Lounge e loja especializada em cultura hookah no coração de Aracaju.
        </p>

        <div className="footer-links">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer">
            Instagram
          </a>

          <a href={YOUTUBE_LINK} target="_blank" rel="noreferrer">
            YouTube
          </a>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>

        <span className="copyright">
          © 2026 NarguileAju. Todos os direitos reservados.
        </span>
      </footer>

      {/* =========================
          MENU MOBILE
      ========================== */}

      <div className="mobile-actions">
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
          💬
          <span>WhatsApp</span>
        </a>

        <a href={JUKEBOX_LINK} target="_blank" rel="noreferrer">
          🎵
          <span>Jukebox</span>
        </a>

        <a href={MAPS_LINK} target="_blank" rel="noreferrer">
          📍
          <span>Como chegar</span>
        </a>
      </div>

      <LoungePresenceCard />
    </div>
  );
}

export default App;
