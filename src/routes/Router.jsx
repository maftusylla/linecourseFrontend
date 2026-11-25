import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from '../components/SiteLayout.jsx'
import { pages } from '../pages/pageRegistry.js'

const page = (name) => {
  const Page = pages[name]
  return <Page />
}

export default function Router() {
  return (
    
    <Routes>
      <Route element={<SiteLayout kind="public" />}>
        <Route index element={page('home')} />
        <Route path="/catalogue" element={page('catalogue')} />
        <Route path="/formations/:courseId" element={page('courseDetail')} />
        <Route path="/connexion" element={page('login')} />
        <Route path="/inscription" element={page('register')} />
        <Route path="/mot-de-passe-oublie" element={page('forgotPassword')} />
        <Route path="/reinitialisation-mot-de-passe" element={page('resetPassword')} />
        <Route path="/verification-email" element={page('verifyEmail')} />
        <Route path="/hello" element={page('hello')} />

      </Route>

      <Route element={<SiteLayout kind="learner" />}>
        <Route path="/apprenant/tableau-de-bord" element={page('learnerDashboard')} />
        <Route path="/apprenant/catalogue" element={page('learnerCatalogue')} />
        <Route path="/apprenant/detail-cours" element={page('learnerCourseDetail')} />
        <Route path="/apprenant/mes-cours" element={page('learnerCourses')} />
        <Route path="/apprenant/apprentissage" element={page('learning')} />
        <Route path="/apprenant/profil" element={page('learnerProfile')} />
      </Route>

      <Route element={<SiteLayout kind="teacher" />}>
        <Route path="/enseignant/tableau-de-bord" element={page('teacherDashboard')} />
        <Route path="/enseignant/catalogue" element={page('teacherCatalogue')} />
        <Route path="/enseignant/cours-crees" element={page('teacherCourses')} />
        <Route path="/enseignant/studio" element={page('teacherStudio')} />
        <Route path="/enseignant/studio/modules" element={<Navigate to="/enseignant/studio#modules" replace />} />
        <Route path="/enseignant/studio/lecons" element={<Navigate to="/enseignant/studio#lecons" replace />} />
        <Route path="/enseignant/inscriptions" element={page('teacherEnrollments')} />
        <Route path="/enseignant/profil" element={page('teacherProfile')} />
      </Route>

      <Route element={<SiteLayout kind="administrator" />}>
        <Route path="/admin/tableau-de-bord" element={page('adminDashboard')} />
        <Route path="/admin/utilisateurs" element={page('adminUsers')} />
        <Route path="/admin/cours" element={page('adminCourses')} />
        <Route path="/admin/roles-acces" element={page('adminRoles')} />
        <Route path="/admin/securite" element={page('adminSecurity')} />
        <Route path="/admin/profil" element={page('adminProfile')} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
