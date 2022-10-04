import Url from "./Url";

export default function UrlList({ urls }: any) {
  return (
    <div className="my-10">
      <Url url={urls} />
    </div>
  );
}
