from diffusers import DiffusionPipeline # DeepFloyd IF
from utils.pil_utils import pt_to_pil   # DeepFloyd IF

def load_models(torch):
    # Stage 1
    stage_1 = DiffusionPipeline.from_pretrained("DeepFloyd/IF-I-M-v1.0", variant="fp16", torch_dtype=torch.float16)
    stage_1.enable_xformers_memory_efficient_attention()
    stage_1.enable_model_cpu_offload()

    # Stage 2
    stage_2 = DiffusionPipeline.from_pretrained(
        "DeepFloyd/IF-II-M-v1.0", text_encoder=None, variant="fp16", torch_dtype=torch.float16
    )
    stage_2.enable_xformers_memory_efficient_attention()
    stage_2.enable_model_cpu_offload()

    # Stage 3
    safety_modules = {
        "feature_extractor": stage_1.feature_extractor,
        "safety_checker": stage_1.safety_checker,
        "watermarker": stage_1.watermarker
    }
    stage_3 = DiffusionPipeline.from_pretrained(
        "stabilityai/stable-diffusion-x4-upscaler", **safety_modules, torch_dtype=torch.float16
    )
    stage_3.enable_xformers_memory_efficient_attention()
    stage_3.enable_model_cpu_offload()

    return {"stage_1": stage_1, "stage_2": stage_2, "stage_3": stage_3}