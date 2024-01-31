import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function NavbarComponent() {
  const supabase = createClientComponentClient();
  const handleLogout = async () => {
    const { err } = await supabase.auth.signOut();

    if (!err) {
      window.location.href = "/login";
      return;
    }

    console.error(err);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/admin">
        Dimensi Web
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNav"
      >
        <ul className="navbar-nav">
          <li className="nav-item ">
            <a className="nav-link" href="/admin">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/activities">
              Activities
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/members">
              Members
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/admin/register">
              Register Admin
            </a>
          </li>
          <li className="nav-item">
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-light nav-link"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
