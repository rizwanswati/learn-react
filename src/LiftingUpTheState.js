import LiftingUpTheStateChild from "./LiftingUpTheStateChild";
function LiftingUpTheState() {

    function parentAlert(data){
        console.info(data)
    }

    return (
        <>
            <h1>Parent</h1>
            <LiftingUpTheStateChild method = {parentAlert} />
        </>
    )
}

export default LiftingUpTheState