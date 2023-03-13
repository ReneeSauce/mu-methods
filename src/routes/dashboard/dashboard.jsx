import { Button, Layout, Pill, Table, Wallet } from "../../components";

export const Dashboard = () => {
  return (
    <Layout
      className="mb-32px"
      header={
        <>
          <Layout.Header.Left>
            <Button size="sm" leftIcon="mu" buttonKind="textOnly" />
          </Layout.Header.Left>
          <Layout.Header.Center>
            <div className="mt-20px"></div>
            <Table.Header>total balance</Table.Header>
            <h1 className="fw-bold">$ 1,000,000</h1>
            <Pill
              className="fs-14px fw-light"
              isCopiable
              opacity="10"
              shape="square"
              size="small"
              text="Ox6b...7776"
              textOpacity="70"
            />
          </Layout.Header.Center>
          <Layout.Header.Right>
            <Button size="sm" leftIcon="add" buttonKind="tertiary" />
          </Layout.Header.Right>
        </>
      }
      body={
        <>
          <Table>
            <div className="mt-12px"></div>
            <Table.Header>Primary Account</Table.Header>
            <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id="1234567"
                name="MyMetamaskAkk"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5WkTt5462C95lYurbWL1ic0jtmW9UOGxlB-cFd3A3Dm8U8UFTELI-jNqmx-c-HlGd8NA&usqp=CAU"
                wallet="METAMASK"
                currency="ETH 0.80"
                amount="$ 1,000"
              />
            </Table.Cell>
            <div className="mt-32px"></div>
            <Table.Header>Linked Accounts</Table.Header>
            <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id="1234567"
                name="SolanaAkk"
                src="https://s3-alpha.figma.com/hub/file/2204229748/ad1d22a9-445a-4a9d-8ad2-117c2ae9a299-cover.png"
                wallet="solana"
                currency="SOL 532"
                amount="$ 137.24"
              />
            </Table.Cell>
            <Table.Cell>
              <Wallet
                alt="wallet avatar"
                id="1234567"
                name="PolygonAkk"
                src="https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/DPYBKVZG55EWFHIK2TVT3HTH7Y.png"
                wallet="polygon"
                currency="MATIC 232"
                amount="$ 206.48"
              />
            </Table.Cell>
          </Table>
        </>
      }
    ></Layout>
  );
};
