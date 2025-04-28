import '../styles/header.css';

export default function Header() {
  return (
    <header>
        <div className="header-container">
            <div className="header-logo">
                <svg
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                >
                <path
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3c1.918 0 3.52 1.35 3.91 3.151A4 4 0 0 1 18 13.874V21H6v-7.126a4 4 0 1 1 2.092-7.723A4 4 0 0 1 12 3M6.161 17.009L18 17"
                />
                </svg>
            </div>
            <div className="header-title">
                <h1>CHEFF</h1>
            </div>
        </div>
    </header>
  );
}
