import { Link } from "react-router-dom";

export interface BreadcrumbsItem {
  name: string;
  link?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
  dark?: boolean; // light or dark font?
}

export const Breadcrumbs = ({ items, dark }: BreadcrumbsProps) => {
  return (
    <nav
      className="breadcrumbs"
      style={dark ? { color: "black" } : { color: "white" }}
    >
      <ul className="breadcrumbs__container">
        {items.map((page, id) => {
          return (
            <li key={id} className="breadcrumbs__item">
              <Link
                className={`breadcrumbs__link ${dark ? "dark" : ""}`}
                to={page.link || "#"}
              >
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
