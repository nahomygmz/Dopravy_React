import {Link} from 'react-router-dom';

function MenuAdmin(){
    return(
        <div>
           
            <link rel="icon" href="./assets1/images/icon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
            />

            <link rel="stylesheet" href="./assets2/assets/vendor/fonts/boxicons.css" />

            <link rel="stylesheet" href="./assets2/assets/vendor/css/core.css" className="template-customizer-core-css" />
            <link rel="stylesheet" href="./assets2/assets/vendor/css/theme-default.css" className="template-customizer-theme-css" />
            <link rel="stylesheet" href="./assets2/assets/css/demo.css" />
            <link rel="stylesheet" href="./assets2/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />

            <link rel="stylesheet" href="./assets2/assets/vendor/libs/apex-charts/apex-charts.css" />
            <script src="./assets2/assets/vendor/js/helpers.js"></script>
            <script src="./assets2/assets/js/config.js"></script>




            <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
                <div className="app-brand demo">
                    <a href="index.html" className="app-brand-link">
                        <h4 className="demo menu-text fw-bolder ms-2">Dopravy Admin</h4>
                    </a>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle"></i>
                    </a>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">
                    <li className="menu-item active">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <Link to="/indexadmin">Dashboard</Link>
                        </div>
                    </li>

                    <li className="menu-header small text-uppercase">
                        <span className="menu-header-text">Clientes</span>
                    </li>
                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to="/listadoclientes">Lista de clientes</Link>
                        </div>
                    </li>
                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to='/listadoencargos'>Lista de Encargos</Link>
                        </div>
                    </li>

                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Empleados</span></li>
                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to='/agregarempleado'>Registrar nuevo empleado</Link>
                        </div>
                    </li>

                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to='/listadoempleados'>Lista de empleados</Link>
                        </div>
                    </li>

                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Vehículos</span></li>
                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to='/agregarvehiculo'>Registrar nuevo Vehiculo</Link>
                        </div>
                    </li>

                    <li className="menu-item">
                        <div className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <Link to='/listadovehiculos'>Lista de Vehiculos</Link>
                        </div>
                            </li>
                </ul>
            </aside>



            <script src="./assets2/assets/vendor/libs/jquery/jquery.js"></script>
            <script src="./assets2/assets/vendor/libs/popper/popper.js"></script>
            <script src="./assets2/assets/vendor/js/bootstrap.js"></script>
            <script src="./assets2/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

            <script src="./assets2/assets/vendor/js/menu.js"></script>

            <script src="./assets2/assets/vendor/libs/apex-charts/apexcharts.js"></script>

            <script src="./assets2/assets/js/main.js"></script>

            <script src="./assets2/assets/js/dashboards-analytics.js"></script>

            <script async defer src="https://buttons.github.io/buttons.js"></script>

        </div>
    )
}

export default MenuAdmin;