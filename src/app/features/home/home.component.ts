import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink], /* used for navigation links between 
    different pages, without router link browse movies will not work @abhinav */
  template: `
    <div class="home">
      <div class="hero-container">
        <h1>🎬 Welcome to TopRTG</h1>
        <p class="subtitle">Discover, Rate & Manage Your Favorite Movies</p>

        <div class="hero">
          <h2>Explore Top-Rated Movies</h2>
          <p>Browse through our curated collection, rate movies, and manage your personal list with ease.</p>
          <div class="cta-buttons">
            <a routerLink="/movies" class="btn btn-primary">Browse Movies</a>
            <a routerLink="/add" class="btn btn-secondary">Add Your Movie</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .home {
      min-height: 90vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 60px 20px;
    }

    .hero-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
      color: white;
    }

    h1 {
      font-size: 48px;
      margin: 0 0 10px 0;
      font-weight: 700;
    }

    .subtitle {
      font-size: 20px;
      margin: 0 0 40px 0;
      opacity: 0.95;
    }

    .hero {
      margin-top: 50px;
      padding: 50px;
      background: rgba(255, 255, 255, 0.95);
      color: #333;
      border-radius: 15px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }

    .hero h2 {
      font-size: 32px;
      margin: 0 0 15px 0;
      color: #667eea;
    }

    .hero p {
      font-size: 16px;
      margin: 0 0 30px 0;
      color: #666;
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn {
      padding: 15px 30px;
      font-size: 16px;
      font-weight: 600;
      border-radius: 8px;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      cursor: pointer;
    }

    .btn-primary {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .btn-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
    }

    .btn-secondary {
      background: white;
      color: #667eea;
      border: 2px solid #667eea;
    }

    .btn-secondary:hover {
      background: #667eea;
      color: white;
      transform: translateY(-3px);
    }
  `]
})
export class HomeComponent {}