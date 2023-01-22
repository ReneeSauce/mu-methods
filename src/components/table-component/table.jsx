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
  return <p className="">{children}</p>;
};

const avatar = ({ link, alt }) => {
  return <img className="" src={link} alt={alt} />;
};

const name = ({ children }) => {
  return <p className="">{children}</p>;
};

const bal = ({ children }) => {
  return <p className="">{children}</p>;
};

const key = ({ children }) => {
  return <p className="text-white90">{children}</p>;
};

const symbol = ({ alt, link }) => {
  return <img className="" alt={alt} src={link} />;
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
