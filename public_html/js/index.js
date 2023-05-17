ReactDOM.render(React.createElement('input', {
    placeholder: "помогите",
    onClick: () => console.log("clicked"),
    onMouseEnter: () => console.log('mouseoverc')
}), document.getElementById("app"))