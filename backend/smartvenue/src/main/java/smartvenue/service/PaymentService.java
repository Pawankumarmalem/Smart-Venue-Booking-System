package smartvenue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smartvenue.entity.Payment;
import smartvenue.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    // Add Payment
    public Payment addPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    // View All Payments
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    // View Payment By ID
    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    // Update Payment
    public Payment updatePayment(Long id, Payment newPayment) {

        Payment payment = paymentRepository.findById(id).orElse(null);

        if (payment != null) {
            payment.setAmount(newPayment.getAmount());
            payment.setPaymentMethod(newPayment.getPaymentMethod());
            payment.setPaymentStatus(newPayment.getPaymentStatus());
            payment.setBooking(newPayment.getBooking());

            return paymentRepository.save(payment);
        }

        return null;
    }

    // Delete Payment
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }
}