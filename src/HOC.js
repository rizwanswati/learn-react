function HOC(props) {
    // console.warn(props)
    return (
        <div style={{backgroundColor: props.background, height: props.heigh, width: props.weidth}}>
            <props.comp/>
        </div>
    )
}

export default HOC
