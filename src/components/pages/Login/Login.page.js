import React from 'react'
import './Login.page.scss'
import BackgroundSVG from '../../../assets/images/atom_background_graphic.svg'
import { ReactComponent as IntroImage } from '../../../assets/images/atom_graphic_intro.svg'
import KarmakurierButton from '../../atoms/KarmakurierButton/KarmakurierButton.atom'
import ApiFunctions from '../../../services/api.service'
import UserContext from '../../../services/user.context'

class Login extends React.Component {
  static contextType = UserContext

  constructor(props) {
    super(props)
    this.state = { password: '', email: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { target } = event
    const { value, name } = target

    this.setState({
      [name]: value,
    })
  }

  async handleSubmit() {
    const { funcs, history } = this.context
    const { email, password } = this.state
    try {
      const response = await ApiFunctions.loginUser(email, password)

      if (response.data.token) {
        sessionStorage.setItem('token', response.data.token)
      }

      funcs.changeLoginState(true)
      history.push('/nope')
    } catch (e) {
      funcs.changeLoginState(false)
    }
  }

  render() {
    const { email, password } = this.context
    return (
      <div className="LoginPage">
        <div className="page-header" style={{ backgroundImage: `url(${BackgroundSVG})` }}>
          <h2 className="headline">login</h2>
          <div className="intro-image">
            <IntroImage />
          </div>
          <div className="input-form-first">
            <input
              className="text-input"
              type="text"
              name="email"
              placeholder="E-Mail-Addresse"
              value={email}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="white-container">
          <div className="input-form">
            <input
              className="text-input"
              type="password"
              name="password"
              placeholder="Passwort"
              value={password}
              onChange={this.handleChange}
            />
            <div className="pw-forgot">
              <a href="x">Passwort vergessen?</a>
            </div>
            <div className="white-container-content">
              <input type="checkbox" id="scales" name="scales" /> Eingeloggt bleiben
            </div>
            <div className="login-button-container">
              <KarmakurierButton
                size="full"
                label="anmelden"
                variant="primary"
                onClick={this.handleSubmit}
              />
            </div>
            <p className="white-container-content">
              Noch kein Konto angelegt?{' '}
              <a className="link-login" href="x">
                Registrieren
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Login
