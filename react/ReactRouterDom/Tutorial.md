React Router DOM

1. install react-router-dom

**Main.jsx
2. import {BrowserRouter} from react-router-dom in main.jsx
3. wrap <App/> with <BrowserRouter></BrowserRouter> in main.jsx (this enables routing in whole Application)


**App.jsx
4. Make <Route path='/' element={<Home/>} /> (routes) inside <Routes></Routes>  in App.jsx

! (nested routes [path='/shopping/men'])

**To Avoid Reloding while directing on new url
- Use <Link to='/'> Home </Link>

**Dynamic Routing

[path='/about/:id'] arey yeh toh apna slug hai

to get that :id value / slug use ( useParams() )

**for NotFound

[path='*'] or '/*'