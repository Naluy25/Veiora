import React, { useState } from 'react';
import { Facebook, MessageCircle, Gamepad2 } from 'lucide-react';
import Modal from './Modal';
import SupportForm from './SupportForm';

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              تواصل معنا
            </h3>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/Veiora" 
                className="flex items-center justify-end gap-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <span>فيورا</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/201068146190"
                className="flex items-center justify-end gap-2 text-gray-400 hover:text-green-400 transition-colors"
              >
                <span>01068146190</span>
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              طرق الدفع
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-end gap-2">
                <span>فودافون كاش</span>
                <Gamepad2 className="h-5 w-5 text-purple-400" />
              </li>
              <li className="flex items-center justify-end gap-2">
                <span>انستا باي</span>
                <Gamepad2 className="h-5 w-5 text-purple-400" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              روابط سريعة
            </h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setIsSupportOpen(true)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  الدعم الفني
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  الشروط والأحكام
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  سياسة الخصوصية
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            تم التطوير بواسطة{' '}
            <a 
              href="https://www.facebook.com/profile.php?id=100079615578194" 
              className="text-purple-400 hover:text-purple-300"
            >
              Luffy
            </a>
            {' '}جميع الحقوق محفوظة @2025
          </p>
          <p className="text-sm mt-1 text-gray-500">Powered by Luffy.Media</p>
        </div>
      </div>

      {/* Support Form Modal */}
      <Modal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
        title="الدعم الفني"
      >
        <SupportForm />
      </Modal>

      {/* Terms Modal */}
      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title="الشروط والأحكام"
      >
        <div className="space-y-4 text-right">
          <h4 className="font-bold text-lg text-purple-400">شروط الاستخدام العامة</h4>
          <p className="text-gray-300">باستخدامك لموقع فيورا، فإنك توافق على الشروط والأحكام التالية:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
            <li>جميع المنتجات المعروضة هي منتجات رقمية يتم تسليمها فور إتمام عملية الشراء</li>
            <li>الأسعار المعروضة قابلة للتغيير دون إشعار مسبق</li>
            <li>لا يمكن استرداد المنتجات الرقمية بعد استلام الأكواد أو تفعيلها</li>
            <li>يجب استخدام المنتجات بشكل قانوني وحسب شروط الخدمة الخاصة بكل منصة</li>
            <li>نحتفظ بالحق في رفض أي طلب شراء في حال وجود شك في عملية الاحتيال</li>
          </ul>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title="سياسة الخصوصية"
      >
        <div className="space-y-4 text-right">
          <h4 className="font-bold text-lg text-purple-400">حماية خصوصيتك</h4>
          <p className="text-gray-300">نحن نلتزم بحماية خصوصية مستخدمينا:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300 mr-4">
            <li>لا نقوم بمشاركة معلوماتك الشخصية مع أي طرف ثالث</li>
            <li>نستخدم تقنيات تشفير متقدمة لحماية بياناتك</li>
            <li>يتم استخدام معلومات التواصل فقط لأغراض إتمام الطلبات والدعم الفني</li>
            <li>لا نقوم بتخزين أي معلومات حساسة مثل كلمات المرور أو بيانات الدفع</li>
            <li>يمكنك طلب حذف بياناتك في أي وقت من خلال التواصل مع الدعم الفني</li>
          </ul>
        </div>
      </Modal>
    </footer>
  );
}