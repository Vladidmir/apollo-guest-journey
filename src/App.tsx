import { Route, Routes } from 'react-router-dom'
import { Shell } from './components/Shell'
import { ClubPage } from './pages/Club'
import { GuidePage, GuidesPage } from './pages/Guides'
import { HelpPage } from './pages/Help'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { QrPage } from './pages/Qr'
import { RulesPage } from './pages/Rules'
import { SearchPage } from './pages/Search'
import { SituationPage, SituationsPage } from './pages/Situations'
import { StatsPage } from './pages/Stats'
import { TourPage } from './pages/Tour'
import {
  TrainingExercisePage,
  TrainingMachinesPage,
  TrainingNutritionPage,
  TrainingPage,
  TrainingPlanPage,
  TrainingRecoveryPage,
} from './pages/Training'
import { VendingPage } from './pages/Vending'
import { VisitPage } from './pages/Visit'
import { ZonePage } from './pages/Zone'

export function App() {
  return (
    <Routes>
      <Route element={<Shell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/training/plan" element={<TrainingPlanPage />} />
        <Route path="/training/exercises/:id" element={<TrainingExercisePage />} />
        <Route path="/training/machines" element={<TrainingMachinesPage />} />
        <Route path="/training/recovery" element={<TrainingRecoveryPage />} />
        <Route path="/training/nutrition" element={<TrainingNutritionPage />} />
        <Route path="/zones/:id" element={<ZonePage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/guides/:id" element={<GuidePage />} />
        <Route path="/vending" element={<VendingPage />} />
        <Route path="/situations" element={<SituationsPage />} />
        <Route path="/situations/:id" element={<SituationPage />} />
        <Route path="/visit" element={<VisitPage />} />
        <Route path="/rules" element={<RulesPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/club" element={<ClubPage />} />
        <Route path="/q/:code" element={<QrPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
