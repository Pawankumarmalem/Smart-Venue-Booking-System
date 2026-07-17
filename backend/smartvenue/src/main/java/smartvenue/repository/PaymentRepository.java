package smartvenue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smartvenue.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}