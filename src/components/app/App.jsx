import "./App.css";
import Header from "../header/Header";

function App() {

  return( 
  <div className="app-body">
    <Header/>
  </div> 
);
}

export default App;

// // Install react-use-gesture
// import { useDrag } from 'react-use-gesture';

// const bind = useDrag(({ down, movement: [mx] }) => {
//   // Handle swipe gestures
// });


// function Component() {
//   const [isMobile] = useMediaQuery('(max-width: 768px)');

//   return (
//     <div className={isMobile ? 'mobile-layout' : 'desktop-layout'}>
//       {isMobile ? (
//         <MobileNav />
//       ) : (
//         <DesktopSidebar />
//       )}
//     </div>
//   );
// }


// // vite.config.js
// export default defineConfig({
//   css: {
//     postcss: {
//       plugins: [
//         require('postcss-flexbugs-fixes'),
//         require('autoprefixer')({
//           grid: 'autoplace' // Fixes CSS Grid for mobile
//         })
//       ]
//     }
//   }
// });


// // Dynamic imports for heavy components
// const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

// // In your route
// <Suspense fallback={<MobileSpinner />}>
//   <HeavyComponent />
// </Suspense>


// // Using styled-components
// const Container = styled.div`
//   padding: 1rem;

//   @media (min-width: ${props => props.theme.breakpoints.md}) {
//     padding: 2rem;
//   }
// `;



// /* src/index.css */
// :root {
//   --mobile-breakpoint: 768px;
// }

// /* Mobile-first media queries */
// @media (min-width: 768px) {
//   /* Tablet+ styles */
// }