import PropTypes from 'prop-types'


export function Button({text, name}) {
    return <button>
            {text} - {name}
            </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
    name : "User"
}