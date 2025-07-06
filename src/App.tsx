import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './components/About';
import Consultation from './components/Consultation'; // Consultationコンポーネントをインポート
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              糖尿病専門 管理栄養士
            </Typography>
            <Button color="inherit" component={Link} to="/">ホーム</Button>
            <Button color="inherit" component={Link} to="/about">自己紹介</Button>
            
            <Button color="inherit" component={Link} to="/achievements">実績</Button>
            <Button color="inherit" component={Link} to="/contact">お問い合わせ</Button>
          </Toolbar>
        </AppBar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Consultation />} /> {/* 新しいルートを追加 */}
          {/* 他のルートもここに追加します */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
