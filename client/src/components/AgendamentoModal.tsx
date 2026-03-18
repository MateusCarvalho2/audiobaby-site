import { useState } from "react";
import { X, Calendar, Phone, User } from "lucide-react";

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AgendamentoModal({ isOpen, onClose }: AgendamentoModalProps) {
  const [formData, setFormData] = useState({
    nomeMae: "",
    nomeBebe: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    horarioPreferido: "",
    mensagem: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setFormData({
          nomeMae: "",
          nomeBebe: "",
          dataNascimento: "",
          telefone: "",
          email: "",
          horarioPreferido: "",
          mensagem: "",
        });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-[#94B1DA] to-[#6B90C4] p-6 flex items-center justify-between">
          <div>
            <h2 className="font-rheago text-2xl text-white">Agendar Consulta</h2>
            <p className="text-[#E8F1F8] text-sm mt-1">Preencha os dados abaixo</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-3xl">✓</span>
              </div>
              <h3 className="font-nunito font-700 text-lg text-[#2C3E50] mb-2">
                Agendamento Enviado!
              </h3>
              <p className="text-[#718096] text-sm">
                Obrigada! Nossa equipe entrará em contato em breve para confirmar seu horário.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Nome da Mãe */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  <User size={16} className="inline mr-2" />
                  Seu Nome *
                </label>
                <input
                  type="text"
                  name="nomeMae"
                  value={formData.nomeMae}
                  onChange={handleChange}
                  required
                  placeholder="Digite seu nome"
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                />
              </div>

              {/* Nome do Bebê */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  Nome do Bebê
                </label>
                <input
                  type="text"
                  name="nomeBebe"
                  value={formData.nomeBebe}
                  onChange={handleChange}
                  placeholder="Digite o nome do seu bebê"
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                />
              </div>

              {/* Data de Nascimento */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  <Calendar size={16} className="inline mr-2" />
                  Data de Nascimento *
                </label>
                <input
                  type="date"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  <Phone size={16} className="inline mr-2" />
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu.email@exemplo.com"
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                />
              </div>

              {/* Horário Preferido */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  Horário Preferido *
                </label>
                <select
                  name="horarioPreferido"
                  value={formData.horarioPreferido}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors"
                >
                  <option value="">Selecione um horário</option>
                  <option value="manha">Manhã (8h - 12h)</option>
                  <option value="tarde">Tarde (12h - 18h)</option>
                  <option value="sabado">Sábado (8h - 12h)</option>
                  <option value="flexivel">Flexível</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block font-nunito font-600 text-sm text-[#2C3E50] mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte-nos mais sobre seu bebê ou suas dúvidas..."
                  rows={3}
                  className="w-full px-4 py-2 border-2 border-[#E2E8F0] rounded-lg focus:border-[#94B1DA] focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#F4C62F] to-[#E8B820] hover:from-[#D4A820] hover:to-[#C89810] text-[#2C3E50] font-nunito font-700 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Enviando..." : "Agendar Consulta"}
              </button>

              <p className="text-xs text-[#718096] text-center">
                * Campos obrigatórios. Respeitamos sua privacidade.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
