import ContentLoader from "react-content-loader";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const SkeketonItemBicycle = (props: any) => {
  const breakpoint_md = useMediaQuery("(max-width: 1024px)");
  const widthAdaptive = 400;
  const heightAdaptive = breakpoint_md ? 529 : 443;

  return (
    <ContentLoader
      style={{ margin: "auto" }}
      speed={1}
      width={widthAdaptive}
      height={heightAdaptive}
      viewBox={`0 0 ${widthAdaptive} ${heightAdaptive}`}
      backgroundColor="#b3b3b3"
      foregroundColor="#e5e5e5"
      {...props}
    >
      <rect
        x="0"
        y="0"
        rx="10"
        ry="10"
        width={widthAdaptive}
        height={heightAdaptive}
      />
    </ContentLoader>
  );
};

export default SkeketonItemBicycle;