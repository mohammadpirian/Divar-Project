import El from "../../library/El";

const Container = (child) => {
    return (El({
        element:'div',
        className:'',
        child,
    }) );
}
 
export default Container;