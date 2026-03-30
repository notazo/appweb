# Notazo — Landing Page

Landing page de captura para validación de mercado.

## Deploy en Vercel (5 minutos)

### 1. Sube a GitHub
```bash
cd notazo-landing
git init
git add .
git commit -m "Landing page Notazo"
git remote add origin https://github.com/TU_USUARIO/notazo.git
git branch -M main
git push -u origin main
```

### 2. Conecta con Vercel
- Ve a [vercel.com](https://vercel.com)
- Click en "New Project"
- Importa tu repositorio `notazo` de GitHub
- Framework Preset: **Other**
- Click en "Deploy"
- Tu landing estará en `notazo.vercel.app`

### 3. Conecta dominio personalizado (cuando tengas notazo.cl)
- En Vercel, ve a tu proyecto > Settings > Domains
- Agrega `notazo.cl`
- En NIC Chile, apunta los DNS a los que Vercel te indique

### 4. Configura Google Sheets (captura de leads)
- Sigue las instrucciones del archivo `google-apps-script.js`
- Una vez tengas la URL, reemplázala en `index.html`
- Haz push de nuevo a GitHub (Vercel se actualiza automáticamente)

## Estructura
```
notazo-landing/
├── index.html              # Landing page completa
├── google-apps-script.js   # Código para Google Sheets
└── README.md               # Este archivo
```

## Personalización

### Cambiar fecha del countdown
En `index.html`, busca la línea:
```javascript
launchDate.setDate(launchDate.getDate() + 10);
```
Cambia `10` por los días que quieras, o pon una fecha fija:
```javascript
const launchDate = new Date('2026-05-01T23:59:59');
```

### Agregar universidades
En el `<select>` del formulario, agrega más `<option>` según necesites.

## Próximos pasos
- [ ] Crear cuenta Gmail (contacto.notazo@gmail.com)
- [ ] Subir a GitHub
- [ ] Deploy en Vercel
- [ ] Configurar Google Sheets
- [ ] Registrar dominio notazo.cl
- [ ] Compartir en redes y validar demanda
