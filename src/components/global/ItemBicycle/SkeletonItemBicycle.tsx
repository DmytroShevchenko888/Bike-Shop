import ContentLoader from "react-content-loader";

const SkeketonItemBicycle = (props: any) => {
  return (
    <ContentLoader
      style={{
        margin: "auto",
      }}
      speed={1}
      width="100%"
      height={529}
      viewBox={`0 0 100% 529}`}
      backgroundColor="#b3b3b3"
      foregroundColor="#e5e5e5"
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height={529} />
    </ContentLoader>
  );
};

export default SkeketonItemBicycle;
