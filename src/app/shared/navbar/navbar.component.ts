import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="" class="logo">🎬 TopRTG</a>

      <div class="links">
        <a routerLink="" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a>
        <a routerLink="movies" routerLinkActive="active">Movies</a>
        <a routerLink="add" routerLinkActive="active">Add Movie</a>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .logo {
      margin: 0;
      font-size: 28px;
      font-weight: 700;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .logo:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }

    .links {
      display: flex;
      gap: 30px;
    }

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      padding: 8px 16px;
      border-radius: 6px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    a:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .active {
      background: rgba(255, 255, 255, 0.3);
      border-bottom: 2px solid #ffd700;
    }
  `]
})
export class NavbarComponent {}