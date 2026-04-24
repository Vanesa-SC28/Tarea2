import React from 'react';
import styles from './CV.module.css';
import Link from 'next/link';

let CVData: String = 'Vanesa Sebastian Cervantes'

export default function CV() {
    return (
    <>
        <section className={styles['CV section']} id="curriculum">
            <div className="container">
                <div className={styles['cv__content']}>
                    <div className={styles['cv__info']}>
                        <span className={styles['section__subtitle']}>Conoce mi trayectoria</span>
                        <h2 className={styles['section__title']}>Mi Currículum</h2>
                        <p className={styles['cv__description']}>
                            Descarga mi CV para conocer mi formación académica, habilidades 
                            técnicas y experiencia. También puedes conectar conmigo en mis 
                            redes profesionales.
                        </p>
                        
                        <div className={styles['cv__buttons']}>
                            <Link href="https://www.overleaf.com/gallery/tagged/cv" className={styles['btn']}>
                                <i className={styles['fas fa-download']}></i> Descargar CV
                            </Link>
                            <Link href="#" className={styles['btn']}>
                                <i className={styles['fas fa-eye']}></i> Ver CV Digital
                            </Link>
                        </div>
                    </div>
                    
                    <div className={styles['cv__social']}>
                        <h3 className={styles['cv__social-title']}>Conectemos</h3>
                        <div className={styles['cv__social-links']}>
                            <Link href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer" className={styles['social__card']}>
                                <div className={`${styles['social__icon']} ${styles['social__icon--linkedin']}`}>
                                    <i className="fab fa-linkedin-in"></i>
                                </div>
                                <div className={styles['social__info']}>
                                    <span className={styles['social__name']}>LinkedIn</span>
                                    <span className={styles['social__user']}>@Vanesa Sebastian</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles['social__arrow']}`}></i>
                            </Link>

                            <Link href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className={styles['social__card']}>
                                <div className={`${styles['social__icon']} ${styles['social__icon--github']}`}>
                                    <i className="fab fa-github"></i>
                                </div>
                                <div className={styles['social__info']}>
                                    <span className={styles['social__name']}>GitHub</span>
                                    <span className={styles['social__user']}>@Vanesa-SC28</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles['social__arrow']}`}></i>
                            </Link>
                            
                            <Link href="mailto:tu@email.com" className={styles['social__card']}>
                                <div className={`${styles['social__icon']} ${styles['social__icon--email']}`}>
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className={styles['social__info']}>
                                    <span className={styles['social__name']}>Email</span>
                                    <span className={styles['social__user']}>vanesasece28@gmail.com</span>
                                </div>
                                <i className={`fas fa-arrow-right ${styles['social__arrow']}`}></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section> </>
    );
}
