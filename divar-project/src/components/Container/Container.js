import El from "../../library/El";

const Container = (child) => {
    return (El({
        element:'div',
        className:'w-screen',
        child,
    }) );
}
 
export default Container;