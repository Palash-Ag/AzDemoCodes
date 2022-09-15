import Carditem from "./Carditem";

function Catalog(props) {
    return (<>
        {props.products.map((item, index) => <Carditem key={index} productname={item.name} productUrl={"https://localhost:44352/StaticFiles".concat(item.pictureUrl)} prodesc={item.Description} />)}
    </>);
}
export default Catalog;