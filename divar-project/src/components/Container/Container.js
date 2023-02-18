import El from "../../library/El";

const Container = (child) => {
    return (El({
        element:'div',
        className:'container',
        child,
    }) );
}
 
export default Container;