import React from 'react';
import styles from './Inicio.Module.css';
import Link from 'next/link';

let InicioData: String = 'Vanesa Sebastian Cervantes'

export default function Inicio() {
    return (
    <>
        <section className="hero section" id="home">
            <div className="hero__container container">
                <div className="hero__content">
                    <span className="hero__greeting">¡Hola! 👋 Soy</span>
                    <h1 className="hero__title">Vanesa Sebastián Cervantes</h1>
                    <h2 className="hero__subtitle">
                        <span className="highlight"> Matematicas Aplicadas y Computación </span> en Crecimiento
                    </h2>
                    <p className="hero__description">
                        Estudiante de la carrera de Matematicas Aplicadas y Computacion 
                        en la Facultad de Estudios Superiores Acatlan. Combino creatividad 
                        técnica con un enfoque orientado a resultados para transformar ideas en código funcional.
                    </p>
                    <div className="hero__buttons">
                        <a href="#projects" className="btn btn--primary"> 
                            <i className="fas fa-rocket"></i> Ver mis proyectos
                        </a>
                        <a href="#contact" className="btn btn--outline"> 
                            <i className="fas fa-envelope"></i> Contáctame
                        </a>
                    </div>
                </div>
                
                <div className="hero__image">
                    <div className="hero__blob">
                        <div className="hero__avatar">
                            <i className="fas fa-user-astronaut"></i>
                        </div>
                    </div>
                    <div className="hero__decoration hero__decoration--1"></div>
                    <div className="hero__decoration hero__decoration--2"></div>
                    <div className="hero__decoration hero__decoration--3"></div>
                </div>
            </div>
            
            <div className="hero__scroll">
                <a href="#interests" className="hero__scroll-link">
                    <span>Scroll</span>
                    <i className="fas fa-chevron-down"></i>
                </a>
            </div>
        </section> </>
    );
}
