<script setup>
// Configuration de la page
useHead({
  title: 'Portfolio - Votre Nom',
  meta: [
    { name: 'description', content: 'Portfolio de développeur web - Découvrez mes projets et compétences' }
  ]
})

// Smooth scroll pour les liens du menu
onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' })
      }
    })
  })
})
</script>

<template>
  <div class="app">
    <!-- Header/Menu -->
    <header class="header">
      <nav class="nav">
        <div class="nav-container">
          <ul class="nav-menu">
            <li><NuxtLink to="#home" class="nav-link">Accueil</NuxtLink></li>
            <li><NuxtLink to="#about" class="nav-link">À propos</NuxtLink></li>
            <li><NuxtLink to="#projects" class="nav-link">Projets</NuxtLink></li>
            <li><NuxtLink to="#skills" class="nav-link">Compétences</NuxtLink></li>
            <li><NuxtLink to="#contact" class="nav-link">Contact</NuxtLink></li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Body principal -->
    <main class="main">
      <!-- Section Hero/Accueil -->
      <section id="home" class="hero">
        <div class="container">
          <h1 class="hero-title">De Benedetti Diane</h1>
          <p class="hero-subtitle">Community Manager | Designer | Créations numériques</p>
          <div class="hero-buttons">
            <button class="btn btn-primary">Voir mes projets</button>
            <button class="btn btn-secondary">Me contacter</button>
          </div>
        </div>
      </section>

      <!-- Section À propos -->
      <section id="about" class="about">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">À propos de moi</h2>
            <p class="section-subtitle">
              Une brève description de mon parcours et de mes passions 
            </p>
          </div>
          <div class="about-content">
            <div class="about-text">
              <p class="about-paragraph">
                Passionné(e) par le développement web, je crée des expériences numériques 
                uniques et innovantes. Avec une approche centrée sur l'utilisateur, 
                je transforme vos idées en solutions digitales performantes.
              </p>
              <p class="about-paragraph">
                Mon expertise couvre les technologies modernes du web, 
                de la conception à la mise en production.
              </p>
            </div>
            <div class="about-image">
              <div class="image-placeholder">
                <span>Photo de profil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Projets -->
      <section id="projects" class="projects">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Mes Projets</h2>
            <p class="section-subtitle">
              Découvrez une sélection de mes réalisations récentes
            </p>
          </div>
          <div class="projects-grid">
            <!-- Projet 1 -->
            <div class="project-card">
              <div class="project-image project-1">
                <span>Projet 1</span>
              </div>
              <div class="project-content">
                <h3 class="project-title">Nom du projet</h3>
                <p class="project-description">Description courte du projet et des technologies utilisées.</p>
                <div class="project-tags">
                  <span class="tag tag-vue">Vue.js</span>
                  <span class="tag tag-nuxt">Nuxt.js</span>
                </div>
              </div>
            </div>

            <!-- Projet 2 -->
            <div class="project-card">
              <div class="project-image project-2">
                <span>Projet 2</span>
              </div>
              <div class="project-content">
                <h3 class="project-title">Nom du projet</h3>
                <p class="project-description">Description courte du projet et des technologies utilisées.</p>
                <div class="project-tags">
                  <span class="tag tag-js">JavaScript</span>
                  <span class="tag tag-html">HTML/CSS</span>
                </div>
              </div>
            </div>

            <!-- Projet 3 -->
            <div class="project-card">
              <div class="project-image project-3">
                <span>Projet 3</span>
              </div>
              <div class="project-content">
                <h3 class="project-title">Nom du projet</h3>
                <p class="project-description">Description courte du projet et des technologies utilisées.</p>
                <div class="project-tags">
                  <span class="tag tag-react">React</span>
                  <span class="tag tag-ts">TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Compétences -->
      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Mes Compétences</h2>
            <p class="section-subtitle">
              Technologies et outils que je maîtrise
            </p>
          </div>
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon skill-js">JS</div>
              <h3 class="skill-name">JavaScript</h3>
              <p class="skill-desc">ES6+, Async/Await, DOM</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon skill-vue">Vue</div>
              <h3 class="skill-name">Vue.js</h3>
              <p class="skill-desc">Composition API, Vuex, Router</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon skill-nuxt">N</div>
              <h3 class="skill-name">Nuxt.js</h3>
              <p class="skill-desc">SSR, SSG, Auto-import</p>
            </div>
            <div class="skill-item">
              <div class="skill-icon skill-css">CSS</div>
              <h3 class="skill-name">CSS</h3>
              <p class="skill-desc">Flexbox, Grid, Animations</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Contactez-moi</h2>
            <p class="section-subtitle">
              Prêt(e) à collaborer ? Envoyez-moi un message !
            </p>
          </div>
          <div class="contact-form-container">
            <form class="contact-form">
              <div class="form-group">
                <input type="text" placeholder="Votre nom" class="form-input">
              </div>
              <div class="form-group">
                <input type="email" placeholder="Votre email" class="form-input">
              </div>
              <div class="form-group">
                <textarea rows="5" placeholder="Votre message" class="form-textarea"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-full">
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-text">
            <p>&copy; 2024 Votre Nom. Tous droits réservés.</p>
          </div>
          <div class="footer-links">
            <a href="#" class="footer-link">LinkedIn</a>
            <a href="#" class="footer-link">GitHub</a>
            <a href="#" class="footer-link">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
// Variables
$primary-color: #3b82f6;
$secondary-color: #1f2937;
$text-color: #374151;
$text-light: #6b7280;
$bg-light: #f9fafb;
$white: #ffffff;
$border-radius: 8px;
$shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
$shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);

// Base styles
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: $text-color;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

// Header & Navigation
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: $white;
  box-shadow: $shadow;
}

.nav-container {
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: $text-color;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: $primary-color;
  }
}

// Main content
.main {
  flex: 1;
}

// Hero section
.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%);
  display: flex;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: $secondary-color;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.hero-subtitle {
  font-size: 1.5rem;
  color: $text-light;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
}

// Buttons
.btn {
  padding: 0.75rem 2rem;
  border: none;
  border-radius: $border-radius;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;

  &.btn-primary {
    background: $primary-color;
    color: $white;

    &:hover {
      background: #2563eb;
      transform: translateY(-1px);
    }
  }

  &.btn-secondary {
    background: transparent;
    color: $primary-color;
    border: 2px solid $primary-color;

    &:hover {
      background: $primary-color;
      color: $white;
    }
  }

  &.btn-full {
    width: 100%;
  }
}

// Sections
section {
  padding: 5rem 0;
}

.about {
  background: $white;
}

.projects {
  background: $bg-light;
}

.skills {
  background: $white;
}

.contact {
  background: $secondary-color;
  color: $white;

  .section-title {
    color: $white;
  }

  .section-subtitle {
    color: #d1d5db;
  }
}

// Section headers
.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: $secondary-color;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: $text-light;
  max-width: 32rem;
  margin: 0 auto;
}

// About section
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.about-paragraph {
  margin-bottom: 1.5rem;
  color: $text-color;
  line-height: 1.8;
}

.image-placeholder {
  background: #e5e7eb;
  height: 16rem;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $text-light;
}

// Projects section
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: $white;
  border-radius: $border-radius;
  box-shadow: $shadow-lg;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
}

.project-image {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  font-weight: 600;

  &.project-1 {
    background: linear-gradient(135deg, #a855f7 0%, #3b82f6 100%);
  }

  &.project-2 {
    background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
  }

  &.project-3 {
    background: linear-gradient(135deg, #ec4899 0%, #ef4444 100%);
  }
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-description {
  color: $text-light;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;

  &.tag-vue {
    background: #dbeafe;
    color: #1e40af;
  }

  &.tag-nuxt {
    background: #d1fae5;
    color: #065f46;
  }

  &.tag-js {
    background: #fef3c7;
    color: #92400e;
  }

  &.tag-html {
    background: #fee2e2;
    color: #991b1b;
  }

  &.tag-react {
    background: #f3e8ff;
    color: #6b21a8;
  }

  &.tag-ts {
    background: #e0e7ff;
    color: #3730a3;
  }
}

// Skills section
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.skill-item {
  text-align: center;
}

.skill-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
  font-size: 1.25rem;

  &.skill-js {
    background: #dbeafe;
    color: #1d4ed8;
  }

  &.skill-vue {
    background: #d1fae5;
    color: #047857;
  }

  &.skill-nuxt {
    background: #f3e8ff;
    color: #7c3aed;
  }

  &.skill-css {
    background: #cffafe;
    color: #0891b2;
  }
}

.skill-name {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.skill-desc {
  color: $text-light;
  font-size: 0.875rem;
}

// Contact form
.contact-form-container {
  max-width: 32rem;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: $border-radius;
  border: 1px solid #4b5563;
  background: #374151;
  color: $white;
  
  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    border-color: $primary-color;
  }
}

.form-textarea {
  resize: none;
}

// Footer
.footer {
  background: #1f2937;
  color: $white;
  padding: 2rem 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: $white;
  }
}
</style>