import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousell = () => {
	return (
		<div className="carousellRoot">
			<div>
				<Swiper className="mySwiper">
					<SwiperSlide>
						<div className="row">
							<div className="col-5">
								<div className="card border-light infoCard">
									<p>
										Pinterest lumbersexual forage chillwave godard pitchfork
										vexillologist deep v chia truffaut four dollar toast food
										truck meditation. Hot chicken coloring book cliche YOLO,
										crucifix kale chips swag hexagon raclette paleo next level
										austin yuccie thundercats.
									</p>
								</div>
							</div>
							{/* End */}
							<div className="col">
								<div className="card" style={{ width: "18rem" }}>
									<img src="..." className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
							{/* End */}
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="row">
							<div className="col-5">
								<div className="card border-light infoCard">
									<p>
										Pinterest lumbersexual forage chillwave godard pitchfork
										vexillologist deep v chia truffaut four dollar toast food
										truck meditation. Hot chicken coloring book cliche YOLO,
										crucifix kale chips swag hexagon raclette paleo next level
										austin yuccie thundercats.
									</p>
								</div>
							</div>
							{/* End */}
							<div className="col">
								<div className="card" style={{ width: "18rem" }}>
									<img src="..." className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
							{/* End */}
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="row">
							<div className="col-5">
								<div className="card border-light infoCard">
									<p>
										Pinterest lumbersexual forage chillwave godard pitchfork
										vexillologist deep v chia truffaut four dollar toast food
										truck meditation. Hot chicken coloring book cliche YOLO,
										crucifix kale chips swag hexagon raclette paleo next level
										austin yuccie thundercats.
									</p>
								</div>
							</div>
							{/* End */}
							<div className="col">
								<div className="card" style={{ width: "18rem" }}>
									<img src="..." className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">Card title</h5>
										<p className="card-text">
											Some quick example text to build on the card title and
											make up the bulk of the card's content.
										</p>
										<a href="#" className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
							{/* End */}
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Carousell;
