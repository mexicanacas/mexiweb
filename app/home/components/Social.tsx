export const Social = () => {
  return (
    <nav className="flex justify-around gap-4 text-4xl">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        href="https://www.instagram.com/mexicanacas?igsh=b3B5N3ZycnI0YzBx"
        className="hover:text-primary/80"
      >
        <i className="fa-brands fa-instagram" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Spotify"
        href="https://open.spotify.com/artist/2I4RX8u3uyBXG0kxvhzLui?si=AULMUxW9SGeEl_sQCOWy8Q"
        className="hover:text-primary/80"
      >
        <i className="fa-brands fa-spotify" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        href="https://www.facebook.com/losmexicanacas"
        className="hover:text-primary/80"
      >
        <i className="fa-brands fa-facebook-f" />
      </a>
      <a href="mailto:booking@mexi.no" className="hover:text-primary/80">
        <i className="fa-solid fa-envelope" />
      </a>
    </nav>
  );
};
