import React from 'react';
import PropTypes from 'prop-types'
class Form extends React.Component {
  render() {
    const { title, description, category, handleChange, addTask, urgent, disabledButton } = this.props; //passando as props com o render
    return (
      <form>
        <input type='text' >Adicionar</input>
        <input type='text'></input>
        <input type='select'></input>
        <option value='trabalho'>Trabalho</option>
        <option value='casa'>Casa</option>
        <option value='lazer'>Lazer</option>
        <option value='outros'>Outros</option>
        <label>
          <input type='checkbox'></input>
        </label>
<button></button>
      </form>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  urgent: PropTypes.bool.isRequired,
  disabledButton: PropTypes.bool.isRequired,
}

export default Form;