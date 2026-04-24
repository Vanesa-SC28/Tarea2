import React from 'react';
import styles from './Contact.module.css';
import Link from 'next/link';

let Contact: String = 'Vanesa Sebastian Cervantes'

export default function contact() {
    return (
    <>
        <section className={styles['contact section']} id="contact">
            <div className="container">
                <div className={styles['contact__content']}>
                    <div className={styles['contact__info']}>
                        <span className={styles['section__subtitle']}>¿Tienes un proyecto?</span>
                        <h2 className={styles['section__title']}>¡Hablemos!</h2>
                        <p className={styles['contact__description']}>
                            Estoy disponible para oportunidades laborales, proyectos freelance 
                            o simplemente para conectar. ¡No dudes en contactarme!
                        </p>
                        
                        <div className={styles['contact__data']}>
                            <div className={styles['contact__item']}>
                                <div className={styles['contact__icon']}>
                                    <i className={styles['fas fa-envelope']}></i>
                                </div>
                                <div className={styles['contact__text']}>
                                    <span className={styles['contact__label']}>Email</span>
                                    <a href="mailto:tu@email.com" className={styles['contact__value']}>vanesasece28@gmail.com</a>
                                </div>
                            </div>
                            <div className={styles['contact__item']}>
                                <div className={styles['contact__icon']}>
                                    <i className={styles['fas fa-map-marker-alt']}></i> 
                                </div>
                                <div className={styles['contact__text']}>
                                    <span className={styles['contact__label']}>Ubicación</span>
                                    <span className={styles['contact__value']}>Estado de México, México</span>
                                </div>
                            </div>
                            <div className={styles['contact__item']}>
                                <div className={styles['contact__icon']}>
                                    <i className={styles['fas fa-briefcase']}></i>
                                </div>
                                <div className={styles['contact__text']}>
                                    <span className={styles['contact__label']}>Disponibilidad</span>
                                    <span className={styles['contact__value contact__value--available']}>Disponible para trabajar</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles['contact__cta']}>
                        <div className={styles['contact__card']}>
                            <h3 className={styles['contact__card-title']}>¿Listo para comenzar?</h3>
                            <p className={styles['contact__card-text']}>
                                Envíame un mensaje y te responderé lo antes posible.
                            </p>
                            <a href="mailto:tu@email.com" className={styles['btn btn--primary btn--large btn--full']}>
                                <i className={styles['fas fa-paper-plane']}></i> Enviar mensaje
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section> </>
    );
}
