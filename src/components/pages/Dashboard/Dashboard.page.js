import React, { useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import MainLayout from '../../templates/MainLayout/MainLayout.page'
import CardA from '../../organisms/CardA/CardA.organism'
import Title from '../../atoms/title/title.atom'
import Content from '../../atoms/content/content.atom'
import './Dashboard.page.scss'
import { ReactComponent as NeedImage } from '../../../assets/images/atom_graphic_brauchen.svg'
import { ReactComponent as OfferImage } from '../../../assets/images/atom_graphic_bieten.svg'
import UserContext from '../../../services/user.context'

const Dashboard = () => {
  const user = useContext(UserContext)
  return (
    <MainLayout>
      <div className="Dashboard">
        <h2 className="headline">dashboard</h2>
        <div className="main-backdrop">
          <Content
            content={
              <p>
                Hallo <b>{user.user ? user.user.firstName : null}</b>, was möchtest du tun?
              </p>
            }
          />
          <Title title="Wähle aus..." />
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <CardA image={NeedImage} headline="ich brauche" subheadline="unterstützung" />
            </Grid>
            <Grid item xs={6}>
              <CardA image={OfferImage} headline="ich biete" subheadline="unterstützung" />
            </Grid>
          </Grid>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard
