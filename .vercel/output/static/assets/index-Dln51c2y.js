import{r,j as e,L as l}from"./main-4PTp6Y3q.js";import{W as g}from"./WindowChrome-B3bYLnN8.js";const j="_container_4tiw3_1",b="_wrapper_4tiw3_11",v="_art_4tiw3_16",k="_cursor_4tiw3_31",y="_hidden_4tiw3_43",n={container:j,wrapper:b,art:v,cursor:k,hidden:y},c=`    ███     ▄██   ▄   ███▄▄▄▄   ████████▄     ▄████████  ▄████████ ████████▄
▀█████████▄ ███   ██▄ ███▀▀▀██▄ ███   ▀███   ███    ███ ███    ███ ███   ▀███
   ▀███▀▀██ ███▄▄▄███ ███   ███ ███    ███   ███    █▀  ███    █▀  ███    ███
    ███   ▀ ▀▀▀▀▀▀███ ███   ███ ███    ███  ▄███▄▄▄    ▄███▄▄▄     ███    ███
    ███     ▄██   ███ ███   ███ ███    ███ ▀▀███▀▀▀   ▀▀███▀▀▀     ███    ███
    ███     ███   ███ ███   ███ ███    ███   ███        ███    █▄  ███    ███
    ███     ███   ███ ███   ███ ███   ▄███   ███        ███    ███ ███   ▄███
   ▄████▀    ▀█████▀   ▀█   █▀  ████████▀    ███        ██████████ ████████▀`;function w(){const[t,p]=r.useState(0),[x,m]=r.useState(!1),[u,f]=r.useState(!0),i=r.useCallback((s,o)=>s===`
`?20:s===" "?1:Math.sin(o*.1)>.7?.5:2,[]);r.useEffect(()=>{if(t>=c.length){m(!0);const a=setTimeout(()=>f(!1),1500);return()=>clearTimeout(a)}const s=c[t],o=i(s,t),d=setTimeout(()=>{p(a=>a+1)},o);return()=>clearTimeout(d)},[t,i]);const h=c.slice(0,t);return e.jsx("section",{className:n.container,children:e.jsx("div",{className:n.wrapper,children:e.jsxs("pre",{className:n.art,children:[h,e.jsx("span",{className:`${n.cursor} ${x&&!u?n.hidden:""}`})]})})})}function N(){return e.jsxs(g,{children:[e.jsx(w,{}),e.jsxs("footer",{className:"description",children:[e.jsx("nav",{children:e.jsx(l,{to:"/projects",className:"project-link",children:"→ View Projects"})}),e.jsxs("div",{className:"contact-info",children:[e.jsx("p",{children:"© 2025 Tyndfed. All rights reserved."}),e.jsx("p",{children:"CVR: 39125307"}),e.jsx("p",{children:e.jsx("a",{href:"mailto:kontakt@tyndfed.dk",children:"kontakt@tyndfed.dk"})}),e.jsx("p",{children:e.jsx(l,{to:"/privacy",className:"privacy-link",children:"Privacy & Terms"})})]})]}),e.jsx("style",{children:`
        .description {
          text-align: center;
          padding: 24px 20px 32px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(20, 20, 20, 0.3) 100%
          );
        }
        
        .description nav {
          margin-bottom: 20px;
        }
        
        .project-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: var(--accent-blue, #5eafff);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.01em;
          padding: 12px 24px;
          border-radius: 6px;
          min-height: 44px;
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.08));
          border: 1px solid rgba(94, 175, 255, 0.15);
          transition: 
            background 150ms ease,
            border-color 150ms ease,
            transform 150ms ease;
        }
        
        .project-link:hover {
          background: rgba(94, 175, 255, 0.15);
          border-color: rgba(94, 175, 255, 0.25);
          transform: translateY(-1px);
          text-decoration: none;
        }
        
        .project-link:active {
          transform: translateY(0);
        }
        
        .contact-info {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          line-height: 1.8;
        }
        
        .contact-info p {
          margin: 0;
        }
        
        .contact-info a {
          color: var(--text-secondary, #8c8c8c);
          transition: color 150ms ease;
        }
        
        .contact-info a:hover,
        .privacy-link:hover {
          color: var(--accent-blue, #5eafff);
        }
        
        .privacy-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 11px;
        }
        
        @media (max-width: 480px) {
          .description {
            padding: 20px 16px 24px;
          }
          
          .project-link {
            font-size: 12px;
            padding: 10px 20px;
          }
          
          .contact-info {
            font-size: 11px;
          }
        }
      `})]})}export{N as component};
