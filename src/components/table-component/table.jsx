function Table({ children }) {
  return <div className="bg-white10 d-grid">{children}</div>;
}

const heading = ({ children }) => {
  return <h2 className="text-white90">{children}</h2>;
};

const title = ({ children }) => {
  return <p className="text-white90">{children}</p>;
};

const asset = ({ children }) => {
  <p className="">{children}</p>;
};

const avatar = ({ link, alt }) => {
  <img className="" src={link} alt={alt} />;
};

const name = ({ children }) => {
  <p className="">{children}</p>;
};

const bal = ({ children }) => {
  <p className="">{children}</p>;
};

const key = ({ children }) => {
  <p className="text-white90">{children}</p>;
};

const symbol = ({ alt, link }) => {
  <img className="" alt={alt} src={link} />;
};

Table.Header = heading;
Table.Title = title;
Table.Asset = asset;
Table.Avatar = avatar;
Table.Name = name;
Table.Balance = bal;
Table.PrivateKey = key;
Table.Sym = symbol;

export default Table;
