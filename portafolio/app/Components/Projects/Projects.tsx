import React from 'react';
import styles from './Projects.module.css';
import Link from 'next/link';

let ProjectsData: String = 'Vanesa Sebastian Cervantes'

export default function Projects() {
    return (
    <>
        <section className={styles.projects} id="projects">
            <div className={styles.container}> 
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionSubtitle}>Mi trabajo</span>
                    <h2 className={styles.sectionTitle}>Proyectos Destacados</h2>
                    <p className={styles.sectionDescription}>
                        Una selección de proyectos que demuestran mis habilidades y pasión por el desarrollo
                    </p>
                </div>
                
                <div className={styles.projectsGrid}>
                    <article className={styles.projectCard}>
                        <div className={styles.projectImage}>
                            <div className={styles.projectPlaceholder}>
                                <i className="fas fa-laptop-code"></i>
                            </div>
                            <div className={styles.projectOverlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/tu-usuario/proyecto-1" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>E-Commerce Platform</h3>
                            <p className={styles.projectDescription}>
                                Plataforma de comercio electrónico con carrito de compras, 
                                autenticación de usuarios y pasarela de pagos integrada.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.tech}>React</span>
                                <span className={styles.tech}>Node.js</span>
                                <span className={styles.tech}>MongoDB</span>
                            </div>
                        </div>
                    </article>
                    
                    <article className={styles.projectCard}> 
                        <div className={styles.projectImage}>
                            <div className={styles.projectPlaceholder}>
                                <i className={styles.projectIcon}></i>
                            </div>
                            <div className={styles.projectOverlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/tu-usuario/proyecto-2" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>Dashboard Analytics</h3>
                            <p className={styles.projectDescription}>
                                Panel de control interactivo para visualización de datos 
                                con gráficos dinámicos y reportes automatizados.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>Django</span>
                                <span className={styles.tech}>Chart.js</span>
                            </div>
                        </div>
                    </article>
                    
                    <article className={styles.projectCard}>
                        <div className={styles.projectImage}>
                            <div className={styles.projectPlaceholder}>
                                <i className={styles.projectIcon}></i>
                            </div>
                            <div className={styles.projectOverlay}>
                                <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fas fa-external-link-alt"></i>
                                </Link>
                                <Link href="https://github.com/tu-usuario/proyecto-3" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                                    <i className="fab fa-github"></i>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.projectContent}>
                            <h3 className={styles.projectTitle}>AI Chatbot Assistant</h3>
                            <p className={styles.projectDescription}>
                                Asistente virtual inteligente con procesamiento de lenguaje 
                                natural y respuestas contextuales.
                            </p>
                            <div className={styles.projectTech}>
                                <span className={styles.tech}>Python</span>
                                <span className={styles.tech}>TensorFlow</span>
                                <span className={styles.tech}>Flask</span>
                            </div>
                        </div>
                    </article>
                </div>
                
                <div className="projects__more">
                    <Link href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                        <i className="fab fa-github"></i> Ver más en GitHub
                    </Link>
                </div>
            </div>
        </section> </>
    );
}
