import { Middleware, Context } from '@nuxt/types'

const router: Middleware = async (_context: Context) => {
  if (_context.route.path === '/create') {
    if (!_context.route.params.length) {
      return _context.redirect('/')
    }
    await _context.store.dispatch(`users/createFetch`, { emailVerifyToken: _context.route.params[0] })
    const users = _context.store.state.users.users
    if (!users || !users.response.emailVerifyToken) {
      return _context.redirect('/')
    }
  }
}

export default router
