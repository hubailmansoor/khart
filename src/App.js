import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.2rem 2rem',borderBottom:'1px solid #eee'}}>
        <span style={{fontSize:'22px',fontWeight:'500',letterSpacing:'4px'}}>KHART</span>
        <div style={{display:'flex',gap:'1.5rem'}}>
          <a href="/" style={{fontSize:'13px',color:'#666',textDecoration:'none'}}>Home</a>
          <a href="#about" style={{fontSize:'13px',color:'#666',textDecoration:'none'}}>About</a>
          <a href="#contact" style={{fontSize:'13px',color:'#666',textDecoration:'none'}}>Contact</a>
        </div>
      </nav>

      <div style={{background:'#f97316',padding:'5rem 2rem 4rem',textAlign:'center'}}>
        <div style={{display:'inline-block',background:'rgba(255,255,255,0.25)',color:'white',fontSize:'11px',letterSpacing:'3px',padding:'4px 14px',borderRadius:'20px',marginBottom:'1.5rem'}}>NEW COLLECTION 2026</div>
        <h1 style={{fontSize:'52px',fontWeight:'500',color:'white',lineHeight:'1.1',marginBottom:'1rem'}}>Wear what<br/>moves you.</h1>
        <p style={{fontSize:'16px',color:'rgba(255,255,255,0.85)',maxWidth:'400px',margin:'0 auto 2rem',lineHeight:'1.7'}}>Fresh styles for the bold generation. Khart is more than clothing — it's a statement.</p>
        <a href="/" style={{display:'inline-block',background:'white',color:'#f97316',fontSize:'14px',fontWeight:'500',padding:'12px 32px',borderRadius:'30px',textDecoration:'none'}}>Shop the collection</a>
      </div>

      <div id="about" style={{padding:'4rem 2rem'}}>
        <p style={{fontSize:'11px',letterSpacing:'3px',color:'#888',marginBottom:'0.5rem'}}>ABOUT KHART</p>
        <h2 style={{fontSize:'30px',fontWeight:'500',marginBottom:'1rem'}}>Born from the streets, made for everywhere.</h2>
        <p style={{fontSize:'15px',color:'#555',lineHeight:'1.7',maxWidth:'480px'}}>Khart was built for people who move fast, think fresh, and never settle. Every piece is designed with intention — quality you can feel, style you can own.</p>
      </div>

      <div id="contact" style={{background:'#f9f9f9',borderRadius:'16px',padding:'3rem 2rem',textAlign:'center',margin:'0 2rem 3rem'}}>
        <h2 style={{fontSize:'28px',fontWeight:'500',marginBottom:'0.5rem'}}>Stay in the loop.</h2>
        <p style={{fontSize:'15px',color:'#555',marginBottom:'2rem'}}>Drop your email and be the first to know about new drops.</p>
        <div style={{display:'flex',gap:'1rem',maxWidth:'440px',margin:'0 auto'}}>
          <input type="email" placeholder="your@email.com" style={{flex:'1',height:'42px',border:'1px solid #ddd',borderRadius:'30px',padding:'0 1rem',fontSize:'14px'}}/>
          <button style={{background:'#f97316',color:'white',border:'none',borderRadius:'30px',padding:'0 1.5rem',fontSize:'14px',fontWeight:'500',cursor:'pointer'}}>Notify me</button>
        </div>
      </div>

      <div style={{textAlign:'center',padding:'1.5rem',borderTop:'1px solid #eee',fontSize:'12px',color:'#999'}}>
        © 2026 Khart. All rights reserved.
      </div>
    </div>
  );
}

export default App;