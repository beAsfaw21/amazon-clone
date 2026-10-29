
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Account from './pages/Account/Account';
import All from './pages/All/All';
import Cart from './pages/Cart/Cart';
import Deals from './pages/Deals/Deals';
import GiftCards from './pages/GiftCards/GiftCards';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import Registry from './pages/Registry/Registry';
import Service from './pages/Service/Service';
import Sell from './pages/Sell/Sell';
import { StoreProvider } from './StoreContext';
import Footer from './components/Footer/Footer';
import InfoPage from './pages/Info/InfoPage';

const infoPages = {
  about: {
    eyebrow: 'About the store',
    title: 'Everything you need, in one place.',
    description: 'We make it simple to discover useful products, compare your options, and shop with confidence.',
    sections: [
      { title: 'Built around customers', content: 'Our experience is designed to help you find what you need quickly, with clear information and straightforward checkout.' },
      { title: 'A wide selection', content: 'From everyday essentials to thoughtful gifts, explore categories curated for every kind of shopper.' },
    ],
    action: { title: 'Ready to explore?', description: 'Browse our latest products and discover something new.', label: 'Shop now', to: '/' },
  },
  careers: {
    eyebrow: 'Join our team',
    title: 'Build the future of shopping.',
    description: 'Bring your ideas, curiosity, and customer obsession to a team that is always improving the way people shop.',
    sections: [
      { title: 'Work with purpose', content: 'Solve meaningful problems for millions of shoppers and sellers while learning from a diverse, supportive team.' },
      { title: 'Find your opportunity', content: 'We welcome people across technology, operations, design, customer support, and business.' },
    ],
    action: { title: 'Start your journey', description: 'Tell us where your skills can make a difference.', label: 'View opportunities', to: '/service' },
  },
  science: {
    eyebrow: 'Innovation',
    title: 'Curious minds. Practical ideas.',
    description: 'Explore the technology, research, and thoughtful design behind a better shopping experience.',
    sections: [
      { title: 'Research in action', content: 'We use data, experimentation, and responsible technology to make discovery and delivery more helpful.' },
      { title: 'Made for people', content: 'Innovation is most valuable when it makes everyday tasks simpler, faster, and more accessible.', items: ['Personalized discovery', 'Reliable fulfillment', 'Accessible experiences'] },
    ],
  },
  'sell-products': {
    eyebrow: 'Sell with us',
    title: 'Reach more customers with your products.',
    description: 'Create a seller account, list your products, and grow your business with tools built for every stage.',
    sections: [
      { title: 'Simple listing tools', content: 'Add product details, photos, pricing, and inventory from one easy-to-use workspace.' },
      { title: 'Support for growth', content: 'Use customer insights and flexible fulfillment options to build a stronger business.' },
    ],
    action: { title: 'Start selling', description: 'Ready to put your products in front of more shoppers?', label: 'Get started', to: '/sell' },
  },
  'sell-apps': { eyebrow: 'For developers', title: 'Build experiences customers love.', description: 'Create useful apps and services that help shoppers discover, compare, and buy with confidence.', sections: [{ title: 'Build with flexibility', content: 'Design tools and services for web, mobile, and connected experiences.' }, { title: 'Put customers first', content: 'Focus on reliable, intuitive experiences that solve real shopping needs.' }], action: { title: 'Learn more', description: 'Explore ways to bring your product idea to life.', label: 'Contact support', to: '/service' } },
  advertise: { eyebrow: 'Advertising', title: 'Help the right customers find you.', description: 'Promote your products with simple tools that connect your brand to shoppers who are ready to discover something new.', sections: [{ title: 'Reach relevant shoppers', content: 'Showcase your products alongside the categories and searches that matter to your business.' }, { title: 'Measure what matters', content: 'Use clear performance insights to refine campaigns and make confident decisions.' }], action: { title: 'Grow your brand', description: 'Learn how to make your products more discoverable.', label: 'Get started', to: '/sell' } },
  'business-card': { eyebrow: 'Payment products', title: 'More ways to pay for business.', description: 'Keep business purchases organized with payment options designed for flexibility and control.', sections: [{ title: 'Simplify purchasing', content: 'Bring business spending into one place and make it easier to track what matters.' }, { title: 'Built for teams', content: 'Support everyday purchasing needs with tools that fit the way your organization works.' }], action: { title: 'Need help choosing?', description: 'Our customer service team can guide you.', label: 'Contact support', to: '/service' } },
  'shop-with-points': { eyebrow: 'Payment products', title: 'Use your points when you shop.', description: 'Make your rewards go further with a convenient way to use eligible points on qualifying purchases.', sections: [{ title: 'Flexible rewards', content: 'Choose when to use your points and keep shopping on your terms.' }, { title: 'Clear at checkout', content: 'Review your available rewards before completing your purchase.' }] },
  'reload-balance': { eyebrow: 'Payment products', title: 'Keep your balance ready.', description: 'Reload your shopping balance and make future purchases quick and convenient.', sections: [{ title: 'Easy to manage', content: 'Add funds whenever you need them and keep your shopping budget in one place.' }, { title: 'A thoughtful gift', content: 'A balance reload can also be a simple way to give someone more choice.' }], action: { title: 'Start shopping', description: 'Find something for yourself or someone special.', label: 'Browse products', to: '/' } },
  shipping: { eyebrow: 'Help center', title: 'Shipping rates and policies.', description: 'Find the information you need to understand delivery options, timing, and costs.', sections: [{ title: 'Delivery options', content: 'Available delivery speeds and costs can vary by product, destination, and seller.' }, { title: 'Track your package', content: 'Visit Your Orders to see the latest status and estimated arrival date.' }], action: { title: 'Check an order', description: 'View your recent purchases and delivery updates.', label: 'Your orders', to: '/orders' } },
  returns: { eyebrow: 'Help center', title: 'Returns and replacements.', description: 'We want you to feel confident shopping with us. Learn about your options when something is not right.', sections: [{ title: 'Start a return', content: 'Open Your Orders, select the item, and follow the return instructions shown for that purchase.' }, { title: 'Need assistance?', content: 'Our support team can help you understand the available resolution for your order.' }], action: { title: 'Get help with a return', description: 'We are here to help you find the next step.', label: 'Contact support', to: '/service' } },
  help: { eyebrow: 'Customer service', title: 'How can we help?', description: 'Find quick answers or connect with our support team for help with your account, orders, payments, and more.', sections: [{ title: 'Popular topics', content: 'Get help with delivery, returns, payments, account settings, and product questions.', items: ['Order tracking', 'Returns and refunds', 'Account and password help'] }, { title: 'Personal support', content: 'If you cannot find what you need, our customer service team is ready to help.' }], action: { title: 'Need more help?', description: 'Tell us what is going on and we will point you in the right direction.', label: 'Customer service', to: '/service' } },
};

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Header/>
        <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/all" element={<All />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/service" element={<Service />} />
        <Route path="/sell" element={<Sell />} />
        {Object.entries(infoPages).map(([slug, page]) => (
          <Route key={slug} path={`/${slug}`} element={<InfoPage {...page} />} />
        ))}
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </StoreProvider>
  );
}

export default App;
