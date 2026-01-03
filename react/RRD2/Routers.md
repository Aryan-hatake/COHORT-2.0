React - Single Page Application (URL change hone pe kuch nhi hota tha)

react-router-dom came to solve this problem

1. BrowserRouter

- History API (prev and next tabs)
- Clean URL
- Use in Modern Apps
- Good SEO
- Needs Server Config (returning index.html is must) [Con]

//------------------------------------------------

2. Hash Router

- contains -/courses/#/about (#'s in URL)
- Ugly URL
- Used in older browsers
- No SEO

//------------------------------------------------

3. Memory Router

- Used in React Native

//------------------------------------------------

4. Static Router

- Used in SSR

//--------------------------------------------------

<Outlet/> ?? Nested routes's correct way?

useNavigate for redirection on custom events

store in variable then navigate('/') on event

queryParams