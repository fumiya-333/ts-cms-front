import { Middleware, Context } from '@nuxt/types'

const router: Middleware = async (_context: Context) => {
  if ( _context.route.path === '/create' || _context.route.path === '/create/') {
    if (!_context.route.query.token) {
      return _context.redirect('/')
    }
    await _context.store.dispatch(`users/createIndex`, { emailVerifyToken: _context.route.query.token })
    const response = _context.store.state.users.users.response
    if (!response || response.emailVerified) {
      return _context.redirect('/')
    }
  }
  if (_context.route.path === '/passwordReset' || _context.route.path === '/passwordReset/') {
    if (!_context.route.query.token) {
      return _context.redirect('/')
    }
    await _context.store.dispatch(`users/passwordResetIndex`, { passwordResetToken: _context.route.query.token })
    const response = _context.store.state.users.users.response
    if (!response || response.emailPasswordResetVerified) {
      return _context.redirect('/')
    }
  }
}

export default router
