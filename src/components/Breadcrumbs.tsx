import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

export interface BreadcrumbsItem {
  name: string;
  link?: string;
  showName?: (name: string) => string;
}

interface BreadcrumbsProps {
  items: BreadcrumbsItem[];
  dark?: boolean; // light or dark font?
}

export const Breadcrumbs = ({ items, dark }: BreadcrumbsProps) => {
  const fullName = useAppSelector(
    (state) => state.bicycles.bicycle.currentbicycle?.fullName
  );
  const category = useAppSelector(
    (state) => state.bicycles.bicycle.currentbicycle?.category
  );

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
                {page.showName && fullName && category
                  ? page.name !== "category" // show fullName or Category
                    ? page.showName(fullName)
                    : page.showName(category)
                  : page.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
